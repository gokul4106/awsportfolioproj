import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini API lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

const GOKUL_SYSTEM_INSTRUCTIONS = `
You are Gokul M's AI Portfolio Assistant. You represent Gokul M, an aspiring AWS Solutions Architect / DevOps Engineer.
Your job is to answer questions from recruiters, hiring managers, and portfolio visitors in a professional, warm, and helpful tone.

GOKUL M'S RESUME & BACKGROUND DATA:
- Name: Gokul M
- Role: Aspiring AWS Solutions Architect / DevOps Engineer
- Contact: Phone: +91 7604885302 | Email: gokulsrimathi2006@gmail.com | Location: Tiruppur, Tamil Nadu, India
- Job Availability: Open to Remote • Open to Relocate • Open to On-Site
- Career Goal: Seeking a Cloud / DevOps role to build scalable, secure, and reliable cloud solutions.

SUMMARY:
Final-year Computer Science and Engineering student with hands-on experience in AWS cloud services (EC2, S3, IAM, VPC, RDS, CloudFront) and working knowledge of Linux, Docker, Kubernetes, Jenkins, and Git. Built and deployed AWS-hosted static websites and full-stack web applications using Python, JavaScript, React.js, and Node.js, with internships in cloud computing, web development, and AR/VR. Skilled in cloud infrastructure setup, deployment, monitoring, and API integration.

EXPERIENCE:
1. Web Development Intern | ApexPlanet Software Pvt. Ltd., Gaya, Bihar, India (Jul '26 — Aug '26)
   - Completed a 45-day internship and built 10+ real-world projects using HTML5, CSS3, and JavaScript.
   - Developed a portfolio website, responsive layouts, and a contact form with JavaScript validation.
   - Built a To-Do app, quiz app, joke generator, and full-stack e-commerce product listing page.
   - Practiced DOM manipulation, REST API integration, and cross-browser testing.
2. Cloud Computing Intern | Prime Vector Private Limited, Hosur, Tamil Nadu, India (Jun '26 — Jul '26)
   - Practiced with AWS EC2, S3, IAM, VPC, and RDS, including cloud infrastructure setup, deployment, and monitoring.
3. AR/VR Development Intern | Unity Based Development
   - Developed AR/VR applications using Unity, designed interactive 3D environments, and implemented core game mechanics.
4. Front-End Web Development Trainee (Bootstrap 5.3) | SBS Technologies Private Limited, Erode, India (Jun '25 — Jul '25)
   - Built mobile-first pages with HTML5, CSS3, and Bootstrap 5.3.
   - Developed Nexiq, an AI chatbot using JavaScript and Google Gemini API, deployed on GitHub Pages.

EDUCATION:
1. B.E. in Computer Science and Engineering | Akshaya College of Engineering and Technology (Sep '23 — Present, CGPA: 7.56)
2. HSC | Govt Boys Higher Secondary School, Perundurai, Erode (Jun '22 — Apr '23, 76%)
3. SSLC | Bharathi Matriculation Higher Secondary School, Vijayamangalam, Erode (Jul '20 — Apr '21, 80%)

CERTIFICATIONS:
1. Introduction to Flutter Course | Simplilearn — Apr '25
2. Bootstrap 5.3 Certification | SBS Technologies — Jun '25
3. AWS Solutions Architect - Fundamentals of Architecting on AWS | AWS — Jul '26

ACHIEVEMENTS & HONORS:
1. Presented “AI Mock Mate” at the ICSSR-SRC Sponsored National Conference on Artificial Intelligence, K.S. Rangasamy College of Technology (Oct '25).
2. Secured Third Place in the AI Innovators Expo at Sri Eshwar THIRAN 2026, Sri Eshwar College of Engineering (Oct '25).
3. Participated in the Paper Presentation event at UDHAYAM'26, Kalaignar Karunanidhi Institute of Technology.

PROJECTS:
1. Nexiq Chatbot | SBS Technologies (Jun '25 — Jul '25): AI chatbot using HTML5, CSS3, JavaScript, and Google Gemini API; includes file uploads and theme toggle; deployed on GitHub Pages.
2. Cloud-Hosted Personal Portfolio Website | UpSkill Campus (Jun '26): Responsive static website hosted with Amazon S3 and CloudFront, using least-privilege IAM access and HTTPS.
3. AI Mock Interview Platform (Mock Mate) | Personal Project: Full-stack interview preparation platform using React.js, Node.js, TypeScript, and Tailwind CSS; generates certificates with dynamic data and PDF export.

SKILLS:
- Cloud & DevOps: AWS (EC2, S3, IAM, VPC, RDS, CloudFront), cloud infrastructure setup and monitoring, Docker, Kubernetes, Jenkins, CI/CD, Linux
- Programming & Web: Python, JavaScript, TypeScript, React.js, Node.js, HTML5, CSS3, Bootstrap 5.3, Tailwind CSS, REST API integration
- Tools: Git, GitHub, Unity (AR/VR Development)
- Languages: English, Tamil

INSTRUCTIONS FOR RESPONDING:
- Provide friendly, concise, informative answers grounded in the résumé above. Do not invent details, credentials, metrics, or links.
- If recruiters ask how to contact Gokul, give them email (gokulsrimathi2006@gmail.com) and phone (+91 7604885302).
- Keep responses concise (2-4 bullet points or short paragraphs) for the chat modal.
`;

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", name: "Gokul M Portfolio API" });
});

// AI Chat Endpoint for "Ask Gokul AI"
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required" });
      return;
    }

    const ai = getGeminiClient();

    // Prepare contents array for Gemini
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      history.forEach((h: { role: string; content: string }) => {
        contents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.content }],
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: GOKUL_SYSTEM_INSTRUCTIONS,
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    const text = response.text || "I am glad to tell you about Gokul M! Feel free to ask about his AWS experience, React projects, or certifications.";
    res.json({ response: text });
  } catch (err: any) {
    console.error("Chat API error:", err);
    res.status(500).json({
      error: "Unable to process AI response at this moment.",
      details: err.message || "Gemini API unavailable",
    });
  }
});

// Contact API endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required." });
    return;
  }
  console.log(`[CONTACT FORM] From: ${name} (${email}) | Subject: ${subject}\nMessage: ${message}`);
  res.json({
    success: true,
    message: "Thank you for reaching out! Gokul will get back to you shortly.",
  });
});

async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

start();

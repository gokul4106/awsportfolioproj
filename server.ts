import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

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
You are Gokul M's AI Portfolio Assistant. You represent Gokul M, a Software Engineer and Cloud Computing (AWS) Enthusiast.
Your job is to answer questions from recruiters, hiring managers, and portfolio visitors in a professional, warm, and helpful tone.

GOKUL M'S RESUME & BACKGROUND DATA:
- Name: Gokul M
- Role: Software Engineer | Cloud Computing (AWS) Enthusiast
- Contact: Phone: +91 7604885302 | Email: gokulsrimathi2006@gmail.com | Location: Tiruppur, Tamil Nadu, India
- Job Availability: Open to Remote • Open to Relocate • Open to On-Site
- Target Goals: Eager to contribute to Amazon's Quality Services organization by supporting testing and validation of Devices, Retail, and AWS products.

SUMMARY:
Final-year Computer Science and Engineering student at Akshaya College of Engineering and Technology with hands-on experience in AWS cloud services, web development, and quality/testing fundamentals. Currently pursuing an ongoing Cloud Computing internship, with experience building AWS-hosted static websites and full-stack applications. Strong foundation in Linux environments, Python, and web technologies with a keen eye for detail and problem-solving.

EXPERIENCE:
1. Cloud Computing Intern | Prime Vector, Hosur, India (Jul '26 — Present, Ongoing)
   - Hands-on training in cloud computing fundamentals with AWS services: EC2, S3, IAM, VPC, and RDS.
   - Practical exposure to cloud infrastructure setup, deployment, and monitoring in a live project environment.
   - Collaborating with a technical team to apply cloud concepts to real-world business use cases.
2. Web Development Intern | SBS Technologies Private Limited (Jun '25 — Jul '25)
   - Worked hands-on with HTML5, CSS3, and Bootstrap 5.3 to build responsive web pages across all screen sizes.
   - Focused on mobile-first design, ensuring layouts adapt smoothly from phone to desktop.
   - Paid close attention to UI consistency and accessibility, component-based design & grid system.
3. AR/VR Development Intern | Unity Based Development
   - Developed immersive AR and VR applications using Unity.
   - Designed interactive 3D environments and implemented game mechanics and real-time rendering.

EDUCATION:
1. B.E., Computer Science and Engineering | Akshaya College of Engineering and Technology (Expected 2026, CGPA: 7.56)
2. HSC | Govt. Boys Higher Secondary School (Jun '22 — Apr '23, GPA: 76%)
3. SSLC | Bharathi Matriculation Higher Secondary School (Jul '20 — Apr '21, GPA: 80%)

CERTIFICATIONS:
1. AWS Solutions Architect – Fundamentals of Architecting on AWS (Amazon Web Services) — Jul '26
2. Bootstrap 5.3, SBS Technologies — Jun '25
3. Introduction to Flutter, Simply Learning — Apr '25

ACHIEVEMENTS & HONORS:
1. National Conference Paper Presentation — "AI Mock Mate" | K.S. Rangasamy College of Technology (Oct '25) - ICSSR-SRC Sponsored National Conference on AI for sustainable socio-economic development.
2. AI Innovators Expo — Third Place | Sri Eshwar College of Engineering / THIRAN 2026 (Oct '25) - Awarded 3rd place for innovative AI-based solution.
3. Paper Presentation — UDHAYAM'26 | Kalaignar Karunanidhi Institute of Technology - Recognized for research, presentation, and communication skills.

PROJECTS:
1. AI Mock Interview Platform (Mock Mate) | Personal Project
   - Built AI-powered mock interview preparation platform using React.js, Node.js, TypeScript, Tailwind CSS.
   - Implemented auto-generated certificate of achievement with dynamic data and PDF export.
2. Nexiq Chatbot | SBS Technologies (Jun '25 — Jul '25)
   - Built AI-powered chatbot using HTML5, CSS3, JS, Google Gemini API.
   - Real-time responses, file uploads, dark/light theme, glassmorphism UI; deployed on GitHub Pages.
3. AWS-Hosted Static Website | UpSkill Campus (Cloud Computing Internship)
   - Designed and deployed static website using Amazon S3 for storage and Amazon CloudFront CDN.
   - Gained experience with AWS hosting, distribution, performance optimization, and SSL setup.
4. Smart Sensor Lamp | Personal Project
   - Designed smart sensor lamp adjusting brightness based on ambient light and presence.
   - Tech stack: C++, Arduino IDE, React Native, Node.js.

SKILLS:
- Cloud Computing: AWS Cloud (EC2, S3, IAM, VPC, RDS), CloudFront
- Operating Systems: Linux (Ubuntu/Debian)
- Programming Languages: Python, C, C++, JavaScript, TypeScript
- Web Technologies: HTML5, CSS3, JavaScript, Bootstrap 5.3, React.js, Node.js, Tailwind CSS
- Tools & Platforms: Git, GitHub, VS Code, Unity, Arduino IDE
- Languages: English (Professional), Tamil (Native)

INSTRUCTIONS FOR RESPONDING:
- Provide friendly, crisp, and informative answers about Gokul's skills, AWS knowledge, projects, and career goals.
- If recruiters ask how to contact Gokul, give them email (gokulsrimathi2006@gmail.com) and phone (+91 7604885302).
- Keep responses concise (2-4 bullet points or short paragraphs) so they are easy to read in a chat modal.
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

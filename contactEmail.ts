type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactEmailError extends Error {
  constructor(
    message: string,
    readonly status: 400 | 502 | 503,
  ) {
    super(message);
    this.name = "ContactEmailError";
  }
}

export async function sendContactEmail(body: unknown): Promise<void> {
  if (!body || typeof body !== "object") {
    throw new ContactEmailError("Name, email, and message are required.", 400);
  }

  const { name, email, subject, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    throw new ContactEmailError("Name, email, and message are required.", 400);
  }

  const contact: ContactMessage = {
    name: name.trim(),
    email: email.trim(),
    subject: typeof subject === "string" ? subject.trim() : "",
    message: message.trim(),
  };
  if (
    contact.name.length > 120 ||
    contact.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) ||
    contact.subject.length > 200 ||
    contact.message.length > 5000
  ) {
    throw new ContactEmailError("Please check your contact details and message length.", 400);
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_EMAIL) {
    console.error("Contact email is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_EMAIL.");
    throw new ContactEmailError(
      "Email delivery is not configured yet. Please contact Gokul directly by email.",
      503,
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: contact.email,
        subject: contact.subject || `Portfolio contact from ${contact.name}`,
        text: `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Email provider rejected the contact message:", response.status, await response.text());
      throw new ContactEmailError(
        "Unable to send your message right now. Please try again or email Gokul directly.",
        502,
      );
    }
  } catch (error) {
    if (error instanceof ContactEmailError) throw error;
    console.error("Contact email delivery failed:", error);
    throw new ContactEmailError(
      "Unable to send your message right now. Please try again or email Gokul directly.",
      502,
    );
  }
}

import type { Request, Response } from "express";
import { ContactEmailError, sendContactEmail } from "../contactEmail";

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    await sendContactEmail(req.body);
    res.status(200).json({
      success: true,
      message: "Your message was sent to Gokul successfully.",
    });
  } catch (error) {
    if (error instanceof ContactEmailError) {
      res.status(error.status).json({ error: error.message });
      return;
    }

    console.error("Unexpected contact API error:", error);
    res.status(500).json({ error: "Unable to process your message right now." });
  }
}

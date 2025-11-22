import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { email } from "../template/email.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));   // allow base64 file uploads

// ---------------- Root Test Route ----------------
app.get("/", (req, res) => {
  res.send("Serverless API Working...");
});

// ---------------- Schedule Meeting Route ----------------
app.post("/schedule-meeting", async (req, res) => {
  try {
    const formData = req.body;

    // Base64 file processing
    let attachments = [];
    if (formData.attachment && formData.filename) {
      attachments.push({
        filename: formData.filename,
        content: Buffer.from(formData.attachment, "base64")
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
      tls: { rejectUnauthorized: false }
    });

    const mailOptionsToAdmin = {
      from: formData.email,
      to: process.env.EMAIL,
      subject: "New Meeting Scheduled",
      html: email(formData),
      attachments
    };

    const mailOptionsToUser = {
      from: process.env.EMAIL,
      to: formData.email,
      subject: "Your Meeting is scheduled",
      html: email(formData),
      attachments
    };

    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);

    return res.status(200).json({ message: "Emails sent successfully" });

  } catch (error) {
    console.error("Schedule meeting failed:", error);
    return res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// ---------------- Contact Form Route ----------------
app.post("/send-email", async (req, res) => {
  const { email, phone, countryCode, message, name = "" } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
      tls: { rejectUnauthorized: false }
    });

    const nameLine = name ? `Name: ${name}\n` : "";

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact Form Message",
      text: `${nameLine}From: ${countryCode} ${phone}\nEmail: ${email}\nMessage: ${message}`
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!"
    });

  } catch (err) {
    console.error("Send email failed:", err);
    return res.status(500).json({ err: "Failed to send email", details: err.message });
  }
});

// -------------- EXPORT FOR SERVERLESS ----------------
export default app;

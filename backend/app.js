import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { email } from "./template/email.js";
import multer from "multer";
import fs from "fs";

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(express.json());
dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Its Working....");
});
app.post('/api/schedule-meeting', upload.single('attachment'), async (req, res) => {
  const formData = req.body;
  const file = req.file;
  console.log('Received submission from:', formData.email);
  console.log('File attached:', !!file);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });


    const mailOptionsToAdmin = {
      from: formData.email,
      to: process.env.EMAIL,
      subject: 'New Meeting Scheduled',
      html: email(formData),
      attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
    };

    const mailOptionsToUser = {
      from: process.env.EMAIL,
      to: formData.email,
      subject: 'Your Meeting is scheduled, some of our team will contact you soon.',
      html: email(formData),
      attachments: file ? [{ filename: file.originalname, path: file.path }] : [],
    };

    await Promise.all([
     transporter.sendMail(mailOptionsToAdmin),
     transporter.sendMail(mailOptionsToUser),
    ]);

    if (file) {
      fs.unlink(file.path, (err) => {
        if (err) console.error('Failed to delete temp file:', err);
        else console.log('Temporary file deleted.');
      });
    }
    return res.status(200).json({ message: 'Emails sent successfully' });
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { email, phone, countryCode, message, name = "" } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const nameLine = name ? `Name: ${name}\n` : "";

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL, 
      subject: "New Contact Form Message",
      text: `${nameLine}From: ${countryCode} ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

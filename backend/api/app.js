import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { email } from "../template/email.js";
import multer from "multer";
import fs from "fs";
import serverless from "serverless-http";

dotenv.config();

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Its Working....");
});

app.post('/schedule-meeting', upload.single('attachment'), async (req, res) => {
  const formData = req.body;
  const file = req.file;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
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
      attachments: file && file.path ? [{ filename: file.originalname, path: file.path }] : [],
    };

    const mailOptionsToUser = {
      from: process.env.EMAIL,
      to: formData.email,
      subject: 'Your Meeting is scheduled.',
      html: email(formData),
      attachments: file && file.path ? [{ filename: file.originalname, path: file.path }] : [],
    };

    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToUser);

    if (file) fs.unlink(file.path, () => {});

    res.status(200).json({ message: 'Emails sent successfully' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/send-email", async (req, res) => {
  const { email, phone, countryCode, message, name = "" } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      tls: { rejectUnauthorized: false }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: "New Contact Form Message",
      text: `${name ? "Name: " + name : ""}\nPhone: ${countryCode} ${phone}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Email sent successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export const handler = serverless(app);

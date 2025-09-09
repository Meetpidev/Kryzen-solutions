import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { email } from "./template/email.js";

const app = express();
app.use(bodyParser.json());
app.use(express.json());
dotenv.config();
app.use(cors());

app.post('/api/schedule-meeting', async (req, res) => {
  console.log('Received form data:', req.body);
  const formData = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
        },
        tls: {
    rejectUnauthorized: false
  }
    });


   const emailContent = `
  <h2>New Meeting Scheduled</h2>
  <ul>
    <li><strong>Your Name:</strong> ${formData.name}</li>
    <li><strong>Email:</strong> ${formData.email}</li>
    <li><strong>Mobile Number:</strong> ${formData.mobile}</li>
    <li><strong>Interested Service:</strong> ${formData.service}</li>
    <li><strong>Project Budget:</strong> ${formData.budget}</li>
    <li><strong>Project Type:</strong> ${formData.type}</li>
    <li><strong>Project Details:</strong> ${formData.details}</li>
    <li><strong>Subscribed to Newsletter:</strong> ${formData.newsletter ? "Yes" : "No"}</li>
  </ul>
`;



    await transporter.sendMail({
      from: '"Website Contact Form"',
      to: formData.email,
      subject: 'New Meeting Scheduled',
      html: email(formData),
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

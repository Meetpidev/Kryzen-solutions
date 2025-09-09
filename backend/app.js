import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import { email } from "./template/email.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors());

app.post('/api/schedule-meeting', async (req, res) => {
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
        <li><strong>Your Name:</strong> ${formData['Your name*']}</li>
        <li><strong>Email:</strong> ${formData['Email*']}</li>
        <li><strong>Mobile Number:</strong> ${formData['+91 Mobile Number*']}</li>
        <li><strong>Interested Service:</strong> ${formData['Interested Service*']}</li>
        <li><strong>Project Budget:</strong> ${formData['Project Budget']}</li>
        <li><strong>Project Type:</strong> ${formData['Project Type']}</li>
        <li><strong>Project Details:</strong> ${formData['Tell us more about your project*']}</li>
        <li><strong>Subscribed to Newsletter:</strong> ${formData['Subscribe to Newsletter'] ? "Yes" : "No"}</li>
      </ul>
    `;

    await transporter.sendMail({
      from: '"Website Contact Form"',
      to: formData['Email*'],
      subject: 'New Meeting Scheduled',
      html: email(emailContent),
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

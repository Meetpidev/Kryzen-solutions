import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import {
  careerOwnerEmail,
  careerUserEmail,
  contactOwnerEmail,
  contactUserEmail,
  meetingOwnerEmail,
  meetingUserEmail,
} from "./template/email.js";
import multer from "multer";
import fs from "fs";

dotenv.config();

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const MAIL_FROM = process.env.EMAIL;
const MAIL_PASSWORD = process.env.PASS;

app.get("/", (req, res) => {
  res.send("Its Working....");
});

let transporter;

function createTransporter() {
  if (!MAIL_FROM || !MAIL_PASSWORD) {
    throw new Error("Email transport is not configured. Set EMAIL and PASS in the backend environment.");
  }

  if (transporter) {
    return transporter;
  }

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MAIL_FROM,
      pass: MAIL_PASSWORD,
    },
    pool: true,
    maxConnections: 3,
    maxMessages: 10,
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
}

function cleanupFile(file) {
  if (!file?.path) return;

  fs.unlink(file.path, (err) => {
    if (err) {
      console.error("Failed to delete temp file:", err);
      return;
    }

    console.log("Temporary file deleted.");
  });
}

function parseBoolean(value) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }
  return false;
}

function normalizePhonePayload(payload = {}) {
  const phone = payload.phone || payload.mobile || "";

  return {
    ...payload,
    phone,
    mobile: payload.mobile || phone,
  };
}

async function sendPairedEmails({ adminMail, userMail }) {
  const transporter = createTransporter();

  const adminResult = await transporter.sendMail(adminMail);
  let userEmailSent = false;

  try {
    await transporter.sendMail(userMail);
    userEmailSent = true;
  } catch (reason) {
    console.error("User confirmation email failed:", reason?.message || reason);
  }

  return {
    ownerEmailSent: Boolean(adminResult && adminResult.messageId),
    userEmailSent,
  };
}

app.post('/api/schedule-meeting', upload.single('attachment'), async (req, res) => {
  const formData = normalizePhonePayload({
    ...req.body,
    newsletter: parseBoolean(req.body.newsletter),
    notRobot: parseBoolean(req.body.notRobot),
  });
  const file = req.file;
  console.log('Received submission from:', formData.email);
  console.log('File attached:', !!file);

  try {
    if (!formData.email) {
      cleanupFile(file);
      return res.status(400).json({ error: 'Email is required' });
    }

    const sendResult = await sendPairedEmails({
      adminMail: {
      from: MAIL_FROM,
      to: MAIL_FROM,
      replyTo: formData.email,
      subject: 'New Meeting Scheduled',
      html: meetingOwnerEmail(formData),
      attachments: file && file.path ? [{ filename: file.originalname, path: file.path }] : [],
    },
      userMail: {
      from: MAIL_FROM,
      to: formData.email,
      subject: 'Your Meeting is scheduled, some of our team will contact you soon.',
      html: meetingUserEmail(formData),
    },
    });

    cleanupFile(file);
    return res.status(200).json({
      success: true,
      message: sendResult.userEmailSent
        ? 'Emails sent successfully'
        : 'Meeting request received. Owner email sent, but confirmation email could not be delivered.',
    });
  
  } catch (error) {
    cleanupFile(file);
    console.error("Email send failed:", error.message);
  console.error("Full error:", error);
  res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

app.post("/api/send-email", async (req, res) => {
  const {
    email,
    phone,
    mobile,
    countryCode,
    message,
    name = "",
    formType = "Website Contact Form",
  } = req.body;

  try {
    const payload = normalizePhonePayload({
      email,
      phone,
      mobile,
      countryCode,
      message,
      name,
      formType,
    });
    const source = formType || "Website Contact Form";

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const sendResult = await sendPairedEmails({
      adminMail: {
        from: MAIL_FROM,
        to: MAIL_FROM, 
        replyTo: email,
        subject: `New Contact Form Message - ${source}`,
        html: contactOwnerEmail(payload),
      },
      userMail: {
        from: MAIL_FROM,
        to: email,
        subject: `We received your enquiry - ${source}`,
        html: contactUserEmail(payload),
      },
    });

    res.status(200).json({
      success: true,
      message: sendResult.userEmailSent
        ? "Email sent successfully!"
        : "Enquiry received. Owner email sent, but confirmation email could not be delivered.",
    });
  } catch (err) {
    console.error("Email send failed:", err.message);
  console.error("Full error:", err);
  res.status(500).json({ err: 'Failed to send email', details: err.message });
  }
});

app.post("/api/careers", upload.single("resume"), async (req, res) => {
  const formData = normalizePhonePayload(req.body);
  const file = req.file;

  try {
    if (!formData.email) {
      cleanupFile(file);
      return res.status(400).json({ error: "Email is required" });
    }

    const sendResult = await sendPairedEmails({
      adminMail: {
        from: MAIL_FROM,
        to: MAIL_FROM,
        replyTo: formData.email,
        subject: `New Career Application${formData.role ? ` - ${formData.role}` : ""}`,
        html: careerOwnerEmail(formData),
        attachments: file && file.path ? [{ filename: file.originalname, path: file.path }] : [],
      },
      userMail: {
        from: MAIL_FROM,
        to: formData.email,
        subject: "Your application has been received",
        html: careerUserEmail(formData),
      },
    });

    cleanupFile(file);
    res.status(200).json({
      success: true,
      message: sendResult.userEmailSent
        ? "Application submitted successfully!"
        : "Application received. Owner email sent, but confirmation email could not be delivered.",
    });
  } catch (err) {
    cleanupFile(file);
    console.error("Career email send failed:", err.message);
    console.error("Full error:", err);
    res.status(500).json({ err: "Failed to submit application", details: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});    

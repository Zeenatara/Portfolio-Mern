import { Router } from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/Message.js';

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let transporter = null;
function getTransporter() {
  if (!transporter) { 
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }
  return transporter;
}

async function sendNotificationEmail({ name, email, message }) {
  await getTransporter().sendMail({
    from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p style="white-space: pre-wrap;">${message}</p>
    `,
  });
}

// POST /api/contact — save a message and email it to Zeenat
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'Name, email, and message are all required.' });
    }
    if (!EMAIL_RE.test(email)) {
      return res
        .status(400)
        .json({ error: 'Please provide a valid email address.' });
    }

    const saved = await Message.create({ name, email, message });

    // Don't let an email hiccup block the response — log it and move on.
    try {
      await sendNotificationEmail({ name, email, message });
    } catch (emailErr) {
      console.error('Email notification failed:', emailErr.message);
    }

    return res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    console.error('Error saving contact message:', err.message);
    return res
      .status(500)
      .json({ error: 'Server error — please try again later.' });
  }
});

// GET /api/contact — list saved messages (useful for you to check submissions)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(100);
    return res.json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err.message);
    return res
      .status(500)
      .json({ error: 'Server error — please try again later.' });
  }
});

export default router;

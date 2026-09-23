import { Router } from 'express';
import nodemailer from 'nodemailer';

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

    try {
      await sendNotificationEmail({ name, email, message });
    } catch (emailErr) {
      console.error('Email notification failed:', emailErr.message);

      return res.status(500).json({
        error: 'Unable to send your message right now. Please try again later.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err.message);

    return res.status(500).json({
      error: 'Server error — please try again later.',
    });
  }
});

export default router;

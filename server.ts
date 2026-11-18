import express from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '100kb' }));

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.get('/api/cv-status', (_req, res) => {
  const cvPath = path.resolve(process.cwd(), 'public', 'cv-emanuel-de-jesus.pdf');
  const exists = fs.existsSync(cvPath);
  res.json({
    available: exists,
    filePath: exists ? '/cv-emanuel-de-jesus.pdf' : null,
  });
});

app.post('/api/contact', async (req, res) => {
  const body = (req.body ?? {}) as ContactPayload;
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const subject = typeof body.subject === 'string' ? body.subject.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'validation_name';
  if (!EMAIL_REGEX.test(email)) errors.email = 'validation_email';
  if (subject.length < 3) errors.subject = 'validation_subject';
  if (message.length < 10) errors.message = 'validation_message';

  if (Object.keys(errors).length > 0) {
    res.status(400).json({
      delivered: false,
      error: 'VALIDATION_ERROR',
      fields: errors,
    });
    return;
  }

  const resendKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

  if (resendKey && contactToEmail) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [contactToEmail],
          reply_to: email,
          subject: `[Portfólio] ${subject}`,
          text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
        }),
      });

      if (!response.ok) {
        res.status(502).json({
          delivered: false,
          configured: true,
          error: 'PROVIDER_ERROR',
        });
        return;
      }

      res.status(200).json({
        delivered: true,
        configured: true,
      });
      return;
    } catch {
      res.status(502).json({
        delivered: false,
        configured: true,
        error: 'PROVIDER_ERROR',
      });
      return;
    }
  }

  if (formspreeEndpoint) {
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        res.status(502).json({
          delivered: false,
          configured: true,
          error: 'PROVIDER_ERROR',
        });
        return;
      }

      res.status(200).json({
        delivered: true,
        configured: true,
      });
      return;
    } catch {
      res.status(502).json({
        delivered: false,
        configured: true,
        error: 'PROVIDER_ERROR',
      });
      return;
    }
  }

  // Honest response when no real email integration is configured
  res.status(503).json({
    delivered: false,
    configured: false,
    error: 'EMAIL_NOT_CONFIGURED',
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();

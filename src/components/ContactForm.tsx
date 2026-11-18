import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Copy, Loader2, MessageCircle, Send } from 'lucide-react';
import { TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface ContactFormProps {
  language: Language;
}

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success' }
  | { status: 'not-configured' }
  | { status: 'error' };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [fields, setFields] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' });
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormFields, string>> = {};
    if (fields.name.trim().length < 2) {
      nextErrors.name = t.contact.validation.name;
    }
    if (!EMAIL_REGEX.test(fields.email.trim())) {
      nextErrors.email = t.contact.validation.email;
    }
    if (fields.subject.trim().length < 3) {
      nextErrors.subject = t.contact.validation.subject;
    }
    if (fields.message.trim().length < 10) {
      nextErrors.message = t.contact.validation.message;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    }
    if (submitState.status !== 'idle') {
      setSubmitState({ status: 'idle' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState({ status: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          subject: fields.subject.trim(),
          message: fields.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.delivered) {
        setSubmitState({ status: 'success' });
        setFields({ name: '', email: '', subject: '', message: '' });
        return;
      }

      if (response.status === 503 && data.configured === false) {
        setSubmitState({ status: 'not-configured' });
        return;
      }

      setSubmitState({ status: 'error' });
    } catch {
      setSubmitState({ status: 'error' });
    }
  };

  const formattedMessage = `${language === 'pt' ? 'Nome' : 'Name'}: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n${language === 'pt' ? 'Assunto' : 'Subject'}: ${fields.subject.trim()}\n\n${fields.message.trim()}`;
  const whatsappUrl = `https://wa.me/244940843801?text=${encodeURIComponent(formattedMessage)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const inputBaseClass =
    'w-full rounded-lg border bg-slate-50/80 dark:bg-[#0c1222]/80 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#64748b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/40';

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
        {t.contact.formTitle}
      </h3>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-[#bdc8d1]"
            >
              {t.contact.nameLabel}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={fields.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder={t.contact.namePlaceholder}
              aria-invalid={Boolean(errors.name)}
              className={`${inputBaseClass} ${
                errors.name
                  ? 'border-red-500 dark:border-[#ffb4ab]'
                  : 'border-slate-200 dark:border-[#1e293b] focus:border-[#0284c7] dark:focus:border-[#38bdf8]'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-[#ffb4ab]">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-[#bdc8d1]"
            >
              {t.contact.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={fields.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder={t.contact.emailPlaceholder}
              aria-invalid={Boolean(errors.email)}
              className={`${inputBaseClass} ${
                errors.email
                  ? 'border-red-500 dark:border-[#ffb4ab]'
                  : 'border-slate-200 dark:border-[#1e293b] focus:border-[#0284c7] dark:focus:border-[#38bdf8]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-[#ffb4ab]">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-[#bdc8d1]"
          >
            {t.contact.subjectLabel}
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={fields.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder={t.contact.subjectPlaceholder}
            aria-invalid={Boolean(errors.subject)}
            className={`${inputBaseClass} ${
              errors.subject
                ? 'border-red-500 dark:border-[#ffb4ab]'
                : 'border-slate-200 dark:border-[#1e293b] focus:border-[#0284c7] dark:focus:border-[#38bdf8]'
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-[#ffb4ab]">{errors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-[#bdc8d1]"
          >
            {t.contact.messageLabel}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={fields.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder={t.contact.messagePlaceholder}
            aria-invalid={Boolean(errors.message)}
            className={`${inputBaseClass} resize-y ${
              errors.message
                ? 'border-red-500 dark:border-[#ffb4ab]'
                : 'border-slate-200 dark:border-[#1e293b] focus:border-[#0284c7] dark:focus:border-[#38bdf8]'
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 dark:text-[#ffb4ab]">{errors.message}</p>
          )}
        </div>

        {/* Status Feedback */}
        {submitState.status === 'success' && (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 p-4 text-sm text-emerald-900 dark:text-emerald-200"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="font-semibold">{t.contact.successTitle}</p>
              <p className="mt-0.5 text-xs opacity-90">{t.contact.successBody}</p>
            </div>
          </div>
        )}

        {submitState.status === 'not-configured' && (
          <div
            role="status"
            className="rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/35 p-4 text-sm text-amber-950 dark:text-amber-100"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <p className="font-semibold">{t.contact.notConfiguredTitle}</p>
                <p className="mt-1 text-xs leading-relaxed opacity-90">
                  {t.contact.notConfiguredBody}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-2 rounded-lg bg-slate-900 dark:bg-[#38bdf8] px-3.5 py-2 text-xs font-semibold text-white dark:text-[#041322] transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{t.contact.sendViaWhatsapp}</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-amber-300 dark:border-amber-700/60 bg-white dark:bg-[#0c1222] px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-[#dfe2f0]"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>{copied ? t.contact.copiedMessage : t.contact.copyMessage}</span>
              </button>
            </div>
          </div>
        )}

        {submitState.status === 'error' && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/40 p-4 text-sm text-red-900 dark:text-red-200"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
            <p>{t.contact.genericError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitState.status === 'loading'}
          className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white dark:text-[#041322] shadow-sm transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        >
          {submitState.status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{t.contact.sendingButton}</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>{t.contact.submitButton}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

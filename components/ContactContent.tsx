'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call us',
    primary: '+61 481 356 811',
    sub: '7 days, 7am – 9pm',
    href: 'tel:+61481356811',
    external: false,
    blue: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    primary: '+61 481 356 811',
    sub: 'Quick replies, any time',
    href: 'https://wa.me/61481356811',
    external: true,
    blue: false,
  },
  {
    icon: MessageSquare,
    label: 'Text us',
    primary: '+61 481 356 811',
    sub: 'Quotes via SMS welcome',
    href: 'sms:+61481356811',
    external: false,
    blue: false,
  },
  {
    icon: Mail,
    label: 'Email',
    primary: 'way2026@ezzygoremovalist.com.au',
    sub: 'Reply within the hour',
    href: 'mailto:way2026@ezzygoremovalist.com.au',
    external: false,
    blue: true,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    primary: '@ezzygoremovalist',
    sub: 'Behind the scenes',
    href: 'https://www.instagram.com/ezzygoremovalist',
    external: true,
    blue: true,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    primary: 'EzzyGo Removalist',
    sub: 'Reviews & updates',
    href: 'https://www.facebook.com/profile.php?id=61588721048244',
    external: true,
    blue: true,
  },
];

const hours = [
  { day: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 7:00 PM' },
  { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    date: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [textFocused, setTextFocused] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const message = [
        `═══════════════════════════════════`,
        `      NEW QUOTE REQUEST`,
        `═══════════════════════════════════`,
        ``,
        `👤  NAME:     ${form.name}`,
        `📞  PHONE:    ${form.phone}`,
        `✉️   EMAIL:    ${form.email}`,
        ``,
        form.service ? `🚚  SERVICE:  ${form.service}` : '',
        form.from    ? `📍  FROM:     ${form.from}`    : '',
        form.to      ? `📍  TO:       ${form.to}`      : '',
        form.date    ? `📅  DATE:     ${form.date}`    : '',
        form.message ? `\n─── MESSAGE ───\n${form.message}` : '',
        ``,
        `═══════════════════════════════════`,
        `Sent from ezzygoremovalist.com.au`,
      ].filter(Boolean).join('\n');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '1c8483de-a983-4b05-8d7e-db1e6e3074bf',
          subject: `📩 New Quote Request — ${form.name || 'EzzyGo Website'}`,
          from_name: 'EzzyGo Website',
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message,
          botcheck: '',
        }),
      });
    } catch (_) {}

    try {
      await supabase.from('form_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: `Contact form${form.service ? ' — ' + form.service : ''}`,
        message: [
          form.service && `Service: ${form.service}`,
          form.from && `Moving from: ${form.from}`,
          form.to && `Moving to: ${form.to}`,
          form.date && `Preferred date: ${form.date}`,
          form.message && `\n${form.message}`,
        ].filter(Boolean).join('\n'),
      });
    } catch (_) {}

    setTimeout(() => setStatus('sent'), 900);
  };

  return (
    <>
      {/* ── CONTACT METHODS ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {contactMethods.map((m, i) => {
              const accent = m.blue ? '#0EA5E9' : '#FF6B00';
              const tintBg = m.blue ? 'rgba(125,211,252,0.10)' : 'rgba(255,107,0,0.08)';
              const tintBorder = m.blue ? 'rgba(125,211,252,0.25)' : 'rgba(255,107,0,0.18)';
              const hoverBg = m.blue ? '#F0F9FF' : '#FFF7F0';
              const hoverBorder = m.blue ? 'rgba(125,211,252,0.45)' : 'rgba(255,107,0,0.35)';
              const hoverShadow = m.blue ? '0 16px 40px rgba(125,211,252,0.18)' : '0 16px 40px rgba(255,107,0,0.13)';
              return (
              <motion.a
                key={m.label}
                href={m.href}
                target={m.external ? '_blank' : undefined}
                rel={m.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="group relative block overflow-hidden rounded-[20px] p-5 lg:p-6"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                  textDecoration: 'none',
                  transition:
                    'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = hoverShadow;
                  e.currentTarget.style.borderColor = hoverBorder;
                  e.currentTarget.style.background = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  e.currentTarget.style.background = '#fff';
                }}
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                  style={{
                    background: tintBg,
                    border: `1px solid ${tintBorder}`,
                  }}
                >
                  <m.icon size={18} style={{ color: accent }} strokeWidth={1.8} />
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 5,
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    color: '#111',
                    letterSpacing: '0.01em',
                    lineHeight: 1.15,
                    marginBottom: 5,
                    wordBreak: 'break-word',
                  }}
                >
                  {m.primary}
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: 12,
                    color: accent,
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {m.sub}
                </div>
              </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F5F4F1' }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* LEFT: Info + image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[24px]"
                style={{
                  aspectRatio: '4/3',
                  border: '1px solid rgba(0,0,0,0.07)',
                  marginBottom: 16,
                }}
              >
                <img
                  src="/3.png"
                  alt="EzzyGo Removalist team"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'rgba(255,255,255,0.55)',
                      marginBottom: 4,
                    }}
                  >
                    Response time
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 30,
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: '#fff',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Within the hour.
                  </div>
                </div>
                <div
                  className="absolute right-4 top-4 rounded-2xl px-4 py-3"
                  style={{
                    background: '#FF6B00',
                    boxShadow: '0 12px 36px rgba(255,107,0,0.4)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: 24,
                      fontWeight: 900,
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    Free
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 8,
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: 'rgba(255,255,255,0.8)',
                      marginTop: 2,
                    }}
                  >
                    Quote
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div
                className="rounded-[20px] p-6"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <div
                  className="mb-4 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#FF6B00',
                  }}
                >
                  <Clock size={12} />
                  Opening hours
                </div>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between border-b border-black/5 py-2 last:border-0"
                    >
                      <span
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          color: '#111',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {h.day}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: 14,
                          color: '#666',
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 flex items-center gap-2 rounded-[12px] px-3 py-2"
                  style={{
                    background: 'rgba(255,107,0,0.06)',
                    border: '1px solid rgba(255,107,0,0.15)',
                  }}
                >
                  <MapPin size={12} style={{ color: '#FF6B00' }} />
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#666',
                    }}
                  >
                    Serving all of Queensland
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-[24px] p-6 lg:p-9"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                <AnimatePresence mode="wait">
                  {status === 'sent' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.1 }}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                        style={{
                          background: 'rgba(255,107,0,0.1)',
                          border: '2px solid rgba(255,107,0,0.25)',
                        }}
                      >
                        <CheckCircle2 size={36} style={{ color: '#FF6B00' }} />
                      </motion.div>
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 36,
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          color: '#111',
                          letterSpacing: '-0.01em',
                          lineHeight: 1,
                          marginBottom: 12,
                        }}
                      >
                        Message sent!
                      </h3>
                      <p style={{ fontSize: 15, color: '#777', lineHeight: 1.7, maxWidth: 340 }}>
                        Cheers {form.name.split(' ')[0] || 'mate'} — we&apos;ll
                        be in touch within the hour.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                      <div
                        className="mb-2 flex items-center gap-2"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          letterSpacing: '0.22em',
                          textTransform: 'uppercase',
                          color: '#FF6B00',
                        }}
                      >
                        <Send size={12} />
                        Send a message
                      </div>

                      <h3
                        className="mb-6"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 'clamp(24px, 2.4vw, 32px)',
                          fontWeight: 900,
                          textTransform: 'uppercase',
                          color: '#111',
                          letterSpacing: '-0.01em',
                          lineHeight: 1.1,
                        }}
                      >
                        Tell us about your move
                      </h3>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full name" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" />
                        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="04XX XXX XXX" />
                      </div>
                      <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Moving from" name="from" value={form.from} onChange={handleChange} placeholder="Suburb or postcode" />
                        <Field label="Moving to" name="to" value={form.to} onChange={handleChange} placeholder="Suburb or postcode" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Preferred date" name="date" type="date" value={form.date} onChange={handleChange} />
                        <SelectField label="Service" name="service" value={form.service} onChange={handleChange}>
                          <option value="">Choose one</option>
                          <option>House move</option>
                          <option>Furniture transport</option>
                          <option>Office relocation</option>
                          <option>Interstate move</option>
                          <option>Same-day move</option>
                          <option>Storage</option>
                        </SelectField>
                      </div>

                      <div>
                        <Label text="Anything else?" />
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Stairs? Fragile items? Tell us anything that helps."
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setTextFocused(true)}
                          onBlur={() => setTextFocused(false)}
                          className="w-full rounded-[14px] p-4 outline-none transition-all"
                          style={{
                            background: '#F5F4F1',
                            border: textFocused ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.08)',
                            boxShadow: textFocused ? '0 0 0 3px rgba(255,107,0,0.1)' : 'none',
                            fontFamily: 'inherit',
                            fontSize: 14,
                            color: '#111',
                            resize: 'none',
                          }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
                        style={{
                          background: '#FF6B00',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 17,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: '#fff',
                          border: 'none',
                          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                          opacity: status === 'sending' ? 0.7 : 1,
                          boxShadow: '0 8px 32px rgba(255,107,0,0.32)',
                        }}
                      >
                        {status === 'sending' ? 'Sending...' : 'Send message'}
                        {status !== 'sending' && <ArrowRight size={16} />}
                      </button>

                      <p
                        className="text-center"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          color: '#bbb',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        We&apos;ll reply within the hour.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ text }: { text: string }) {
  return (
    <label
      style={{
        display: 'block',
        fontFamily: "'Space Mono', monospace",
        fontSize: 9,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#888',
        marginBottom: 8,
      }}
    >
      {text}
    </label>
  );
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <Label text={`${label}${required ? ' *' : ''}`} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-[14px] px-4 py-3 outline-none transition-all"
        style={{
          background: '#F5F4F1',
          border: focused ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.08)',
          boxShadow: focused ? '0 0 0 3px rgba(255,107,0,0.1)' : 'none',
          fontFamily: 'inherit',
          fontSize: 14,
          color: '#111',
        }}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  children,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <Label text={label} />
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-[14px] px-4 py-3 outline-none transition-all"
        style={{
          background: '#F5F4F1',
          border: focused ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.08)',
          boxShadow: focused ? '0 0 0 3px rgba(255,107,0,0.1)' : 'none',
          fontFamily: 'inherit',
          fontSize: 14,
          color: '#111',
          appearance: 'none',
          cursor: 'pointer',
        }}
      >
        {children}
      </select>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 14,
  background: '#F5F4F1',
  border: '1px solid rgba(0,0,0,0.09)',
  outline: 'none',
  fontSize: 14,
  color: '#111',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

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
        {label}
        {required && <span style={{ color: '#FF6B00', marginLeft: 4 }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? 'rgba(255,107,0,0.5)' : 'rgba(0,0,0,0.09)',
          boxShadow: focused ? '0 0 0 3px rgba(255,107,0,0.08)' : 'none',
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
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? 'rgba(255,107,0,0.5)' : 'rgba(0,0,0,0.09)',
          boxShadow: focused ? '0 0 0 3px rgba(255,107,0,0.08)' : 'none',
          appearance: 'none',
          cursor: 'pointer',
        }}
      >
        {children}
      </select>
    </div>
  );
}

// Contact methods: phone stays orange (call = action), email/location are blue (info)
const contactMethods = [
  { icon: Phone, label: 'Call us', value: '+61 481 356 811', href: 'tel:+61481356811', blue: false },
  { icon: Mail, label: 'Email', value: 'info@ezzygoremovalist.com.au', href: 'mailto:info@ezzygoremovalist.com.au', blue: true },
  { icon: MapPin, label: 'Service area', value: 'All of Queensland', href: undefined, blue: true },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    from: '', to: '', date: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [textFocused, setTextFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const message = [
        `═══════════════════════════════════`,
        `   NEW QUOTE REQUEST (Homepage)`,
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
          subject: `📩 Homepage Quote Request — ${form.name}`,
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
    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 90% 10%, rgba(255,107,0,0.06) 0%, transparent 50%), radial-gradient(circle at 5% 90%, rgba(125,211,252,0.05) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#FF6B00',
              }}
            >
              <span style={{ display: 'inline-block', width: 28, height: 1, background: '#FF6B00' }} />
              06 / Get in touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(44px, 4.5vw, 68px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Let&apos;s plan
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>your move.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 380 }}
          >
            Fill in the form and we&apos;ll send a fixed quote within the hour.
            Prefer to chat? Call us — we answer fast.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            <div
              className="relative overflow-hidden rounded-[24px]"
              style={{
                aspectRatio: '4/3',
                border: '1px solid rgba(0,0,0,0.08)',
                flexShrink: 0,
              }}
            >
              <img
                src="/3.png"
                alt="EzzyGo removalists at work"
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
                    fontSize: 8,
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    color: 'rgba(125,211,252,0.65)',
                    marginBottom: 4,
                  }}
                >
                  Response time
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 28,
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
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute right-4 top-4 rounded-[16px] px-4 py-3"
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
                    letterSpacing: '-0.02em',
                  }}
                >
                  Free
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 7,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.75)',
                    marginTop: 2,
                  }}
                >
                  Quote
                </div>
              </motion.div>
            </div>

            {/* Contact details — phone orange, email/location blue */}
            <div
              className="flex flex-col gap-3 rounded-[24px] p-6"
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              {contactMethods.map(({ icon: Icon, label, value, href, blue }) => {
                const tintBg = blue ? 'rgba(125,211,252,0.10)' : 'rgba(255,107,0,0.08)';
                const tintBorder = blue ? 'rgba(125,211,252,0.25)' : 'rgba(255,107,0,0.16)';
                const iconColor = blue ? '#0EA5E9' : '#FF6B00';
                const inner = (
                  <div className="group flex items-center gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-105"
                      style={{
                        background: tintBg,
                        border: `1px solid ${tintBorder}`,
                      }}
                    >
                      <Icon size={17} style={{ color: iconColor }} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 8,
                          textTransform: 'uppercase',
                          letterSpacing: '0.2em',
                          color: '#bbb',
                          marginBottom: 2,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 17,
                          fontWeight: 700,
                          color: '#111',
                          lineHeight: 1,
                          letterSpacing: '0.01em',
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} style={{ textDecoration: 'none' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-[24px] p-6 lg:p-9"
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
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
                      style={{ background: 'rgba(125,211,252,0.15)', border: '2px solid rgba(125,211,252,0.4)' }}
                    >
                      <CheckCircle2 size={36} style={{ color: '#0EA5E9' }} />
                    </motion.div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 40,
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        color: '#111',
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                        marginBottom: 12,
                      }}
                    >
                      Booking received!
                    </div>
                    <p style={{ fontSize: 15, color: '#777', lineHeight: 1.7, maxWidth: 340 }}>
                      Cheers {form.name.split(' ')[0] || 'mate'} — we&apos;ll be in touch
                      within the hour with your fixed quote.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
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
                        Anything else?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Stairs? Fragile items? Tell us anything that helps."
                        onFocus={() => setTextFocused(true)}
                        onBlur={() => setTextFocused(false)}
                        style={{
                          ...inputStyle,
                          borderColor: textFocused ? 'rgba(255,107,0,0.5)' : 'rgba(0,0,0,0.09)',
                          boxShadow: textFocused ? '0 0 0 3px rgba(255,107,0,0.08)' : 'none',
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
                      onMouseEnter={e => {
                        if (status !== 'sending') {
                          (e.currentTarget as HTMLElement).style.background = '#e55f00';
                          (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 40px rgba(255,107,0,0.42)';
                        }
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,107,0,0.32)';
                      }}
                    >
                      {status === 'sending' ? 'Sending...' : 'Get my free quote'}
                      {status !== 'sending' && <ArrowRight size={16} />}
                      {status === 'sending' && (
                        <span
                          style={{
                            display: 'inline-block',
                            width: 14,
                            height: 14,
                            border: '2px solid rgba(255,255,255,0.4)',
                            borderTopColor: '#fff',
                            borderRadius: '50%',
                            animation: 'spin 0.7s linear infinite',
                          }}
                        />
                      )}
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
                      We&apos;ll call you back within 15 minutes.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export default function LegalContent({
  lastUpdated,
  intro,
  sections,
}: {
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <section className="relative" style={{ background: '#F5F4F1' }}>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Last updated */}
        <div
          className="mb-10 inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: '#FF6B00' }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#777',
            }}
          >
            Last updated · {lastUpdated}
          </span>
        </div>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: 17,
              color: '#333',
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            {intro}
          </motion.p>
        )}

        {sections.map((s, i) => (
          <div key={i} className="mb-9">
            {s.heading && (
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(22px, 2.3vw, 28px)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: '#111',
                  marginBottom: 14,
                  marginTop: 8,
                }}
              >
                {s.heading}
              </h2>
            )}
            {s.paragraphs?.map((p, pi) => (
              <p
                key={pi}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 16,
                  color: '#444',
                  lineHeight: 1.75,
                  marginBottom: 14,
                }}
              >
                {p}
              </p>
            ))}
            {s.list && (
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0' }}>
                {s.list.map((item, li) => (
                  <li
                    key={li}
                    className="flex items-start gap-3 py-2"
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: '#FF6B00', marginTop: 3 }}
                    >
                      <span style={{ color: '#fff', fontSize: 10, fontWeight: 900 }}>
                        ✓
                      </span>
                    </span>
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 15.5,
                        color: '#444',
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact card */}
        <div
          className="mt-12 rounded-[20px] p-7"
          style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          <div
            className="mb-3 flex items-center gap-2"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FF6B00',
            }}
          >
            Questions?
          </div>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 22,
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#111',
              letterSpacing: '0.01em',
              marginBottom: 10,
              lineHeight: 1.15,
            }}
          >
            Get in touch
          </h3>
          <p style={{ fontSize: 14.5, color: '#666', lineHeight: 1.7, marginBottom: 16 }}>
            If anything here isn&apos;t clear, drop us a line and we&apos;ll explain.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:way2026@ezzygoremovalist.com.au"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FF6B00',
                textDecoration: 'none',
              }}
            >
              way2026@ezzygoremovalist.com.au
            </a>
            <span style={{ color: '#ccc' }}>·</span>
            <a
              href="tel:+61481356811"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 14,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#FF6B00',
                textDecoration: 'none',
              }}
            >
              +61 481 356 811
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, MessageCircle, Mail, Phone, ArrowUpRight, MapPin, ArrowRight } from 'lucide-react';

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9,
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: '#FF6B00',
          fontWeight: 700,
          marginBottom: 20,
        }}
      >
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-1 transition-colors duration-200"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                color: '#555',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#FF6B00';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#555';
              }}
            >
              {l.label}
              <ArrowUpRight
                size={12}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                style={{ color: '#FF6B00' }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

      {/* Background blobs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(255,107,0,0.04) 0%, transparent 45%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">

        {/* ── CTA Banner ── */}
        <div
          className="relative mb-16 overflow-hidden rounded-[28px] p-8 lg:p-14"
          style={{
            background: '#111110',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,107,0,0.28) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,107,0,0.14) 0%, transparent 70%)',
            }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div
                className="mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  color: '#FF6B00',
                }}
              >
                <span style={{ display: 'inline-block', width: 20, height: 1, background: '#FF6B00' }} />
                Ready when you are
              </div>

              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 'clamp(40px, 5vw, 72px)',
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 16,
                }}
              >
                Ready to move?
                <br />
                <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                  Let&apos;s make it ezzy.
                </em>
              </h2>

              <p
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.7,
                  maxWidth: 380,
                }}
              >
                Get a fixed quote in under 60 seconds. No phone tag, no pressure.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-2 lg:items-end">
              <a
                href="#quote"
                className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200 lg:w-auto lg:px-8"
                style={{
                  background: '#FF6B00',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(255,107,0,0.4)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#e55f00';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(255,107,0,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,107,0,0.4)';
                }}
              >
                Get my free quote <ArrowRight size={16} />
              </a>

              <a
                href="tel:+61481356811"
                className="flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200 lg:w-auto lg:px-8"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 17,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#fff',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.22)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                }}
              >
                <Phone size={15} style={{ color: '#FF6B00' }} />
                +61 481 356 811
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer columns ── */}
        <div className="mb-14 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            <Link href="/" className="mb-6 inline-block" style={{ textDecoration: 'none' }}>
              <Image
                src="/logo2-t.png"
                alt="EzzyGo Removalist"
                width={280}
                height={70}
                style={{
                  height: 'auto',
                  width: 'auto',
                  maxHeight: 68,
                  maxWidth: 280,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>

            <p
              style={{
                fontSize: 14,
                color: '#777',
                lineHeight: 1.75,
                maxWidth: 320,
                marginBottom: 24,
              }}
            >
              Affordable, reliable removalists across Queensland. We make
              moving simple — easy, reliable, stress-free.
            </p>

            <div className="mb-6 flex items-center gap-2">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ezzygoremovalist' },
                { icon: Facebook,  label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61588721048244' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/61481356811' },
                { icon: Mail, label: 'Email', href: 'mailto:way2026@ezzygoremovalist.com.au' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(0,0,0,0.09)',
                    color: '#666',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.08)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,0,0.3)';
                    (e.currentTarget as HTMLElement).style.color = '#FF6B00';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.09)';
                    (e.currentTarget as HTMLElement).style.color = '#666';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: '#fff',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <MapPin size={13} style={{ color: '#FF6B00' }} />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#777',
                }}
              >
                Serving all of Queensland, Australia
              </span>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <FooterCol
              title="Services"
              links={[
                { label: 'All services', href: '/services' },
                { label: 'House removals', href: '/services/home-removals' },
                { label: 'Furniture', href: '/services/furniture-transport' },
                { label: 'Office moves', href: '/services/office-relocations' },
                { label: 'Interstate', href: '/services/interstate-moves' },
                { label: 'Storage', href: '/services/storage-solutions' },
              ]}
            />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <FooterCol
              title="Locations"
              links={[
                { label: 'All areas', href: '/locations' },
                { label: 'Brisbane', href: '/locations/brisbane' },
                { label: 'Gold Coast', href: '/locations/gold-coast' },
                { label: 'Sunshine Coast', href: '/locations/sunshine-coast' },
                { label: 'Ipswich', href: '/locations/ipswich' },
                { label: 'Logan', href: '/locations/logan' },
              ]}
            />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <FooterCol
              title="Company"
              links={[
                { label: 'About us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Reviews', href: '/#reviews' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* ── Giant wordmark — full bleed, disco glow + particles ── */}
      <div
        className="relative"
        style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          paddingTop: 40,
          paddingBottom: 40,
          width: '100%',
        }}
      >
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {[
            { left: '5%',  top: '25%', size: 6,  color: '#FF6B00', delay: '0s',   duration: '7s'  },
            { left: '12%', top: '70%', size: 4,  color: '#FF6B00', delay: '1.2s', duration: '9s'  },
            { left: '20%', top: '35%', size: 8,  color: '#FF6B00', delay: '2.5s', duration: '8s'  },
            { left: '28%', top: '80%', size: 5,  color: '#FF6B00', delay: '0.8s', duration: '10s' },
            { left: '36%', top: '15%', size: 7,  color: '#FF6B00', delay: '3.1s', duration: '7.5s'},
            { left: '44%', top: '60%', size: 4,  color: '#FF6B00', delay: '1.8s', duration: '8.5s'},
            { left: '56%', top: '25%', size: 6,  color: '#7DD3FC', delay: '0.4s', duration: '9.2s'},
            { left: '64%', top: '78%', size: 5,  color: '#7DD3FC', delay: '2.2s', duration: '7.8s'},
            { left: '72%', top: '40%', size: 8,  color: '#7DD3FC', delay: '3.6s', duration: '10s' },
            { left: '80%', top: '18%', size: 4,  color: '#7DD3FC', delay: '1.5s', duration: '8s'  },
            { left: '88%', top: '72%', size: 7,  color: '#7DD3FC', delay: '0.9s', duration: '9.5s'},
            { left: '94%', top: '38%', size: 5,  color: '#7DD3FC', delay: '2.8s', duration: '7.3s'},
          ].map((p, i) => (
            <span
              key={i}
              className="ezzygo-particle"
              style={{
                position: 'absolute',
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                borderRadius: '50%',
                background: p.color,
                boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 4}px ${p.color}88`,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>

        <div
          className="select-none text-center leading-none ezzygo-disco"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(72px, 17vw, 240px)',
            fontWeight: 900,
            fontStyle: 'italic',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 0.88,
            whiteSpace: 'nowrap',
            padding: '0 4vw',
          }}
        >
          <span className="ezzy-glow">Ezzy</span>
          <span className="go-glow">Go</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Bottom bar ── */}
        <div
  className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row text-center sm:text-left"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#aaa',
            }}
          >
            © 2026 EzzyGo Removalist. All rights reserved.{' '}
            <span style={{ color: '#ccc', margin: '0 4px' }}>·</span>{' '}
            Built by{' '}
            <a
              href="https://www.veleria.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FF6B00',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.7';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
              }}
            >
              Veleria
            </a>
          </div>
          <div className="flex gap-6">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Cookies', href: '/cookies' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#aaa',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#FF6B00';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '#aaa';
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ezzyPulse {
          0%, 100% {
            filter: drop-shadow(0 0 18px rgba(255,107,0,0.55)) drop-shadow(0 0 38px rgba(255,107,0,0.28));
            transform: translateZ(0) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(255,107,0,0.85)) drop-shadow(0 0 70px rgba(255,107,0,0.5));
            transform: translateZ(0) scale(1.012);
          }
        }
        @keyframes goPulse {
          0%, 100% {
            filter: drop-shadow(0 0 18px rgba(125,211,252,0.55)) drop-shadow(0 0 38px rgba(125,211,252,0.28));
            transform: translateZ(0) scale(1);
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(125,211,252,0.85)) drop-shadow(0 0 70px rgba(125,211,252,0.5));
            transform: translateZ(0) scale(1.012);
          }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes floatParticle {
          0%   { transform: translate(0, 0) scale(0.6); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translate(20px, -30px) scale(1.2); opacity: 0.9; }
          90%  { opacity: 0.6; }
          100% { transform: translate(-15px, -60px) scale(0.4); opacity: 0; }
        }
        .ezzygo-particle {
          animation-name: floatParticle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          opacity: 0;
        }
        .ezzy-glow {
          color: #FF6B00;
          background: linear-gradient(
            100deg,
            #FF6B00 0%,
            #FF6B00 25%,
            #FFB37A 45%,
            #FFE8D4 50%,
            #FFB37A 55%,
            #FF6B00 75%,
            #FF6B00 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation:
            shimmer 4s linear infinite,
            ezzyPulse 3.2s ease-in-out infinite;
          display: inline-block;
        }
        .go-glow {
          color: #7DD3FC;
          background: linear-gradient(
            100deg,
            #7DD3FC 0%,
            #7DD3FC 25%,
            #BAE6FD 45%,
            #F0F9FF 50%,
            #BAE6FD 55%,
            #7DD3FC 75%,
            #7DD3FC 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation:
            shimmer 4s linear infinite 0.4s,
            goPulse 3.2s ease-in-out infinite 0.4s;
          display: inline-block;
        }
        @media (prefers-reduced-motion: reduce) {
          .ezzy-glow, .go-glow, .ezzygo-particle {
            animation: none;
            filter: none;
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
}
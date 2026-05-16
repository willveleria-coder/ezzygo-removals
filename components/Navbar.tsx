'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: padding 0.4s ease;
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
        }

        .nav-inner.scrolled {
          background: rgba(15,15,18,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.45);
          padding: 7px 10px 7px 14px;
        }

        .nav-inner.top {
          padding: 20px 24px;
        }

        /* Logo col */
        .nav-logo {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .nav-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .nav-logo-link:hover { transform: scale(1.03); }

        .nav-logo-img {
          height: 48px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        /* Centre links col */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        /* Right col */
        .nav-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 4px;
        }

        .nav-link {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          padding: 7px 13px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.07);
        }

        .nav-signin {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          padding: 7px 12px;
          border-radius: 8px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-signin:hover { color: rgba(255,255,255,0.85); }

        .nav-cta {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-style: italic;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-size: 14px;
          background: #f97316;
          color: #fff;
          text-decoration: none;
          padding: 9px 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 18px rgba(249,115,22,0.4);
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: #ea6c0a;
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(249,115,22,0.5);
        }

        .nav-hamburger {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .nav-hamburger:hover { background: rgba(255,255,255,0.14); }

        /* Mobile panel */
        .mobile-panel {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 45;
          background: #111114;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 80px 24px 32px;
        }

        .mobile-nav-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-style: italic;
          font-size: 30px;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          display: block;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.18s;
        }
        .mobile-nav-link:last-of-type { border-bottom: none; }
        .mobile-nav-link:hover { color: #f97316; }

        .mobile-cta {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-style: italic;
          text-transform: uppercase;
          font-size: 16px;
          letter-spacing: 0.04em;
          background: #f97316;
          color: white;
          text-decoration: none;
          padding: 15px 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 6px 24px rgba(249,115,22,0.4);
          transition: background 0.2s;
        }
        .mobile-cta:hover { background: #ea6c0a; }

        .mobile-call {
          font-family: 'Barlow', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .mobile-call:hover { color: #fb923c; }

        @media (max-width: 1023px) {
          .nav-links, .nav-right { display: none !important; }
          .nav-inner.top { padding: 16px 20px; }
          .nav-inner.scrolled { padding: 6px 8px 6px 14px; }
          .nav-logo-img { height: 44px; }
        }
        @media (min-width: 1024px) {
          .nav-hamburger { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-logo-img { height: 40px; }
          .nav-inner.top { padding: 14px 16px; }
        }
      `}</style>

      <motion.div
        className="nav-wrap"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{ padding: scrolled ? '10px 20px' : '0' }}
      >
        <div className={`nav-inner ${scrolled ? 'scrolled' : 'top'}`}>

          {/* LEFT: Logo */}
          <div className="nav-logo">
            <Link href="/" aria-label="EzzyGo Removalist Home" className="nav-logo-link">
              <Image
                src="/logo2-t.png"
                alt="EzzyGo Removalist"
                width={200}
                height={50}
                priority
                className="nav-logo-img"
              />
            </Link>
          </div>

          {/* CENTRE: Nav links */}
          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Sign in + CTA */}
          <div className="nav-right">
            <Link href="/book" className="nav-cta">
              Book now <ArrowRight size={13} />
            </Link>
          </div>

          {/* MOBILE: Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </motion.div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 44,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(4px)',
              }}
            />
            <motion.div
              key="panel"
              className="mobile-panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Links */}
              <div style={{ marginBottom: '28px' }}>
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      className="mobile-nav-link"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <Link href="/book" className="mobile-cta" onClick={() => setOpen(false)}>
                  Book now <ArrowRight size={16} />
                </Link>
                <a href="tel:+61481356811" className="mobile-call" onClick={() => setOpen(false)}>
                  <Phone size={14} /> +61 481 356 811
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
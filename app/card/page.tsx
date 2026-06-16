import type { Metadata } from "next";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "EzzyGo Removals — Book & Connect",
  description:
    "Book your move, get a free quote, and follow EzzyGo Removals across Brisbane, Gold Coast & QLD.",
};

/* ─── EDIT THESE, then deploy ──────────────────────────────────────
   Leave any social as "" (empty) to hide that button.            */
const INFO = {
  logo: "/logo.png",                                   // path to logo in /public
  phone: "0481356811",                                 // digits only (for tel:)
  phoneLabel: "0481 356 811",
  email: "info@ezzygoremovalist.com.au",
  website: "https://ezzygoremovalist.com.au",
  book: "https://ezzygoremovalist.com.au/book",
  facebook: "https://www.facebook.com/profile.php?id=61588721048244",
  instagram: "https://www.instagram.com/ezzygoremovalist",
  tiktok: "",
  google: "",                                          // Google reviews URL
};
/* ──────────────────────────────────────────────────────────────── */

const ORANGE = "#FF6B00";

export default function CardLandingPage() {
  const socials = [
    { key: "facebook", href: INFO.facebook, label: "Facebook", Icon: FacebookIcon },
    { key: "instagram", href: INFO.instagram, label: "Instagram", Icon: InstagramIcon },
    { key: "tiktok", href: INFO.tiktok, label: "TikTok", Icon: TikTokIcon },
    { key: "google", href: INFO.google, label: "Reviews", Icon: GoogleIcon },
  ].filter((s) => s.href);

  return (
    <main
      className="min-h-screen w-full flex justify-center px-5 py-10"
      style={{
        background:
          "radial-gradient(120% 80% at 60% 28%, #1E160F 0%, #161210 55%, #100D0B 100%)",
      }}
    >
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={INFO.logo} alt="EzzyGo Removals" className="w-48 h-auto mb-5" />

        <h1
          className={`${anton.className} text-white text-4xl sm:text-5xl leading-none`}
          style={{ letterSpacing: "0.02em" }}
        >
          EZZYGO REMOVALS
        </h1>

        <p
          className={`${anton.className} mt-3 text-xl sm:text-2xl leading-none`}
          style={{ letterSpacing: "0.04em" }}
        >
          <span className="text-white">MOVING </span>
          <span style={{ color: ORANGE }}>MADE </span>
          <span className="text-white">EASY</span>
        </p>

        <p
          className="mt-2 text-[13px] tracking-wide"
          style={{ color: "#9A948B" }}
        >
          Brisbane &nbsp;·&nbsp; Gold Coast &nbsp;·&nbsp; All of QLD
        </p>

        {/* primary actions */}
        <div className="mt-7 w-full flex flex-col gap-3">
          <a
            href={INFO.book}
            className="w-full rounded-xl py-4 font-bold text-white text-base shadow-lg transition active:scale-[0.99]"
            style={{ background: ORANGE }}
          >
            Book Now →
          </a>
          <a
            href={`tel:${INFO.phone}`}
            className="w-full rounded-xl py-3.5 font-semibold text-white text-base border border-white/15 bg-white/[0.04] transition active:scale-[0.99]"
          >
            Call {INFO.phoneLabel}
          </a>
          <a
            href={INFO.website}
            className="w-full rounded-xl py-3.5 font-semibold text-base border transition active:scale-[0.99]"
            style={{ color: "#7DD3FC", borderColor: "rgba(125,211,252,0.35)" }}
          >
            Visit our website
          </a>
          <a
            href={`mailto:${INFO.email}`}
            className="w-full rounded-xl py-3 font-medium text-sm text-white/75 transition active:scale-[0.99]"
          >
            {INFO.email}
          </a>
        </div>

        {/* socials */}
        {socials.length > 0 && (
          <>
            <div
              className="mt-8 mb-4 h-px w-2/3"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            <div className="flex items-center justify-center gap-4">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-12 h-12 rounded-full border border-white/15 bg-white/[0.05] text-white transition active:scale-95"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </>
        )}

        <p className="mt-10 text-xs" style={{ color: "#6f6a62" }}>
          © {new Date().getFullYear()} EzzyGo Removals
        </p>
      </div>
    </main>
  );
}

/* ─── inline brand icons (currentColor) ─────────────────────────── */
function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3 0-2.5-.4-3.5-1v5.9c0 3-2.2 5.2-5.1 5.2A5.1 5.1 0 0 1 6.3 14c0-2.9 2.4-5.1 5.4-4.8v2.6a2.4 2.4 0 0 0-1.1-.2 2.5 2.5 0 1 0 2.5 2.5V3h3.4Z" />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.3 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6L12 2Z" />
    </svg>
  );
}
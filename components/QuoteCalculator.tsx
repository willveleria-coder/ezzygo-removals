'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Building2,
  Sofa,
  Truck,
  Minus,
  Plus,
  Sparkles,
  Check,
} from 'lucide-react';

type MoveType = 'studio' | '1br' | '2br' | '3br' | '4br' | 'office' | 'single';

const moveTypes: { id: MoveType; label: string; icon: any; baseHours: number }[] = [
  { id: 'studio', label: 'Studio',      icon: Home,      baseHours: 2 },
  { id: '1br',    label: '1 Bedroom',   icon: Home,      baseHours: 3 },
  { id: '2br',    label: '2 Bedroom',   icon: Home,      baseHours: 4 },
  { id: '3br',    label: '3 Bedroom',   icon: Home,      baseHours: 6 },
  { id: '4br',    label: '4+ Bedroom',  icon: Home,      baseHours: 8 },
  { id: 'office', label: 'Office',      icon: Building2, baseHours: 4 },
  { id: 'single', label: 'Single Item', icon: Sofa,      baseHours: 1 },
];

export default function QuoteCalculator() {
  const [moveType, setMoveType] = useState<MoveType>('2br');
  const [movers,   setMovers]   = useState(2);
  const [distance, setDistance] = useState(20);
  const [stairs,   setStairs]   = useState(false);
  const [packing,  setPacking]  = useState(false);
  const [urgent,   setUrgent]   = useState(false);
  const [saved,    setSaved]    = useState(false);

  const { hours, total, breakdown } = useMemo(() => {
    const base       = moveTypes.find((m) => m.id === moveType)!;
    const stairsHrs  = stairs  ? 0.5                    : 0;
    const packingHrs = packing ? base.baseHours * 0.5   : 0;
    const totalHrs   = base.baseHours + stairsHrs + packingHrs;
    // Enforce 2-hour minimum
    const billableHrs = Math.max(2, totalHrs);
    const hourlyRate = movers === 2 ? 169 : movers === 3 ? 219 : 279;
    const labour     = billableHrs * hourlyRate;
    const travel     = Math.max(0, distance - 10) * 2.5;
    const fuelLevy   = 14;
    const surcharge  = urgent ? labour * 0.15 : 0;
    return {
      hours: billableHrs,
      total: Math.round(labour + travel + fuelLevy + surcharge),
      breakdown: { labour: Math.round(labour), travel: Math.round(travel), fuelLevy, surcharge: Math.round(surcharge), hourlyRate },
    };
  }, [moveType, movers, distance, stairs, packing, urgent]);

  useEffect(() => {
    setSaved(true);
    const t = setTimeout(() => setSaved(false), 1400);
    return () => clearTimeout(t);
  }, [moveType, movers, distance, stairs, packing, urgent]);

  return (
    <section
      id="quote"
      className="relative overflow-hidden"
      style={{ background: '#F5F4F1' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 60%, rgba(255,107,0,0.06) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(125,211,252,0.05) 0%, transparent 45%)',
        }}
      />
      <div style={{ height: 1, background: 'rgba(0,0,0,0.07)' }} />

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
              03 / Instant Quote
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
              Build your quote
              <br />
              in <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>60 seconds.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: 16, color: '#666', lineHeight: 1.7, maxWidth: 380 }}
          >
            Adjust the options below for a live estimate. Lock it in any time
            and we&apos;ll confirm by text.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-3"
          >
            <div
              className="rounded-[24px] p-6 lg:p-9"
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
            >
              <div className="absolute right-6 top-6 flex items-center gap-2">
                <AnimatePresence mode="wait">
                  {saved ? (
                    <motion.div
                      key="saved"
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      className="flex items-center gap-1.5"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#0EA5E9',
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                      Updated
                    </motion.div>
                  ) : (
                    <motion.div
                      key="live"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        color: '#aaa',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#0EA5E9',
                          animation: 'pulse 1.5s infinite',
                        }}
                      />
                      Live
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mb-8">
                <StepLabel num="01" text="What are you moving?" />
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {moveTypes.map((m) => {
                    const active = moveType === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setMoveType(m.id)}
                        className="flex flex-col items-center gap-2 rounded-[16px] p-4 transition-all duration-200"
                        style={{
                          background: active ? 'rgba(255,107,0,0.07)' : 'rgba(0,0,0,0.02)',
                          border: active ? '1px solid rgba(255,107,0,0.35)' : '1px solid rgba(0,0,0,0.08)',
                          cursor: 'pointer',
                          transform: active ? 'scale(1.02)' : 'scale(1)',
                        }}
                      >
                        <m.icon
                          size={18}
                          style={{ color: active ? '#FF6B00' : '#888' }}
                          strokeWidth={1.8}
                        />
                        <span
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: 14,
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: active ? '#111' : '#666',
                          }}
                        >
                          {m.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-8">
                <StepLabel num="02" text="How many movers?" />
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => setMovers(Math.max(2, movers - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      background: 'rgba(0,0,0,0.04)',
                      border: '1px solid rgba(0,0,0,0.09)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,0,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.09)';
                    }}
                  >
                    <Minus size={15} style={{ color: '#444' }} />
                  </button>

                  <div className="flex-1 text-center">
                    <motion.div
                      key={movers}
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', duration: 0.3 }}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: 56,
                        fontWeight: 900,
                        color: '#FF6B00',
                        lineHeight: 1,
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {movers}
                    </motion.div>
                    <div
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 9,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: '#aaa',
                        marginTop: 4,
                      }}
                    >
                      Movers + Truck —{' '}
                      <span style={{ color: '#FF6B00' }}>${breakdown.hourlyRate}/hr</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMovers(Math.min(5, movers + 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200"
                    style={{
                      background: 'rgba(0,0,0,0.04)',
                      border: '1px solid rgba(0,0,0,0.09)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,0,0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,0,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.09)';
                    }}
                  >
                    <Plus size={15} style={{ color: '#444' }} />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <StepLabel
                  num="03"
                  text={
                    <>
                      Distance — <span style={{ color: '#FF6B00' }}>{distance} km</span>
                    </>
                  }
                />
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full cursor-pointer appearance-none rounded-full"
                  style={{
                    height: 6,
                    accentColor: '#FF6B00',
                    background: `linear-gradient(to right, #FF6B00 0%, #FF6B00 ${
                      ((distance - 5) / 195) * 100
                    }%, rgba(0,0,0,0.10) ${
                      ((distance - 5) / 195) * 100
                    }%, rgba(0,0,0,0.10) 100%)`,
                  }}
                />
                <div
                  className="mt-2 flex justify-between"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    color: '#bbb',
                    letterSpacing: '0.1em',
                  }}
                >
                  <span>5 km</span>
                  <span>200 km</span>
                </div>
              </div>

              <div>
                <StepLabel num="04" text="Add-ons" />
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {[
                    { label: 'Stairs / Walk-up', val: stairs, set: () => setStairs(!stairs) },
                    { label: 'Packing service',  val: packing, set: () => setPacking(!packing) },
                    { label: 'Same-day urgent',  val: urgent,  set: () => setUrgent(!urgent) },
                  ].map(({ label, val, set }) => (
                    <button
                      key={label}
                      onClick={set}
                      className="rounded-[14px] px-4 py-3 text-left transition-all duration-200"
                      style={{
                        background: val ? 'rgba(255,107,0,0.07)' : 'rgba(0,0,0,0.02)',
                        border: val ? '1px solid rgba(255,107,0,0.35)' : '1px solid rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: val ? '#FF6B00' : '#555',
                        }}
                      >
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div
              className="sticky top-28 overflow-hidden rounded-[24px] p-7 lg:p-8"
              style={{
                background: '#111110',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.18), transparent 70%)' }}
              />

              <div className="relative">
                <div
                  className="mb-3 flex items-center gap-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                    color: '#FF6B00',
                  }}
                >
                  <Sparkles size={12} />
                  Estimated quote
                </div>

                <motion.div
                  key={total}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.4 }}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(64px, 7vw, 84px)',
                    fontWeight: 900,
                    color: '#FF6B00',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  ${total.toLocaleString()}
                </motion.div>

                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.12em',
                    marginTop: 8,
                    textTransform: 'uppercase',
                  }}
                >
                  Approx. {hours} hours total
                </div>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '24px 0' }} />

                <div className="space-y-3">
                  <SummaryRow label={`Labour (${hours}h × $${breakdown.hourlyRate})`} value={`$${breakdown.labour}`} />
                  {breakdown.travel > 0 && (
                    <SummaryRow label="Travel surcharge" value={`$${breakdown.travel}`} />
                  )}
                  <SummaryRow label="Fuel levy" value={`$${breakdown.fuelLevy}`} />
                  {breakdown.surcharge > 0 && (
                    <SummaryRow label="Same-day urgency (15%)" value={`$${breakdown.surcharge}`} />
                  )}
                  <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '12px 0' }} />
                  <SummaryRow label="GST included"    value="✓" muted />
                  <SummaryRow label="Insurance included" value="✓" muted />
                  <SummaryRow label="2hr minimum"  value="✓" muted />
                </div>

                <a
                  href="#contact"
                  onClick={() => {
                    try {
                      const sizeLabel = moveTypes.find((m) => m.id === moveType)?.label || moveType;
                      const addons = [stairs && 'Stairs', packing && 'Packing', urgent && 'Same-day'].filter(Boolean).join(', ');
                      sessionStorage.setItem('ezzygo_quote', JSON.stringify({ total, hours, size: sizeLabel, movers, distance, addons }));
                    } catch (_) {}
                  }}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-[14px] py-4 transition-all duration-200"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 17,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(255,107,0,0.35)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#e55f00';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255,107,0,0.45)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#FF6B00';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(255,107,0,0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  GET MY QUOTE
                  <Truck size={16} />
                </a>

                <p
                  className="mt-3 text-center leading-relaxed"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.08em',
                  }}
                >
                  Final pricing may vary by access, item volume and date.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

function StepLabel({ num, text }: { num: string; text: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          color: '#FF6B00',
          letterSpacing: '0.15em',
          fontWeight: 700,
        }}
      >
        {num}
      </span>
      <span
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 18,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          color: '#111',
        }}
      >
        {text}
      </span>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ fontSize: 13, color: muted ? 'rgba(125,211,252,0.7)' : 'rgba(255,255,255,0.6)' }}>
        {label}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: muted ? 400 : 600,
          color: muted ? '#7DD3FC' : '#fff',
        }}
      >
        {value}
      </span>
    </div>
  );
}
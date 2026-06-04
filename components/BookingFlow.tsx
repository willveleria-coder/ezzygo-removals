'use client';

import { useState, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  Truck,
  Home as HomeIcon,
  Briefcase,
  Sofa,
  Warehouse,
  MapPinned,
  Clock,
  ChevronLeft,
  ChevronRight,
  Check,
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MapPin,
  Building2,
  Bed,
  Plus,
  Minus,
  Users,
  TriangleAlert,
} from 'lucide-react';

/* ───────── Types & Data ───────── */

type ServiceOption = {
  id: string;
  label: string;
  icon: any;
  from: string;
  duration: string;
};

type PropertySize = {
  id: string;
  label: string;
  icon: any;
  suggestedMovers: number;
  estHours: string;
};

type MoveItem = {
  id: string;
  label: string;
  icon: any;
};

const services: ServiceOption[] = [
  { id: 'house-move',    label: 'House move',          icon: HomeIcon,   from: '$149/hr', duration: '3–6 hr' },
  { id: 'furniture',     label: 'Furniture transport', icon: Sofa,       from: '$150',    duration: '2 hr' },
  { id: 'office',        label: 'Office relocation',   icon: Briefcase,  from: '$150',    duration: '1 hr+' },
  { id: 'interstate',    label: 'Interstate move',     icon: MapPinned,  from: '$2,500',  duration: '6 hr+' },
  { id: 'same-day',      label: 'Same-day move',       icon: Clock,      from: '$250',    duration: '4 hr' },
  { id: 'packing',       label: 'Packing service',     icon: Package,    from: '$250',    duration: '2 hr' },
  { id: 'loading',       label: 'Load & unload only',  icon: Truck,      from: '$200',    duration: '1.5 hr' },
  { id: 'storage',       label: 'Storage',             icon: Warehouse,  from: '$75',     duration: '1 hr' },
];

const propertySizes: PropertySize[] = [
  { id: 'studio',  label: 'Studio',      icon: HomeIcon,   suggestedMovers: 2, estHours: '2 hr' },
  { id: '1br',     label: '1 Bedroom',   icon: HomeIcon,   suggestedMovers: 2, estHours: '3 hr' },
  { id: '2br',     label: '2 Bedroom',   icon: HomeIcon,   suggestedMovers: 2, estHours: '4 hr' },
  { id: '3br',     label: '3 Bedroom',   icon: HomeIcon,   suggestedMovers: 3, estHours: '5 hr' },
  { id: '4br',     label: '4+ Bedroom',  icon: HomeIcon,   suggestedMovers: 4, estHours: '7 hr' },
  { id: 'office',  label: 'Office',      icon: Building2,  suggestedMovers: 3, estHours: '3 hr+' },
  { id: 'single',  label: 'Single Item', icon: Sofa,       suggestedMovers: 2, estHours: '1 hr' },
];

const itemsCatalog: MoveItem[] = [
  { id: 'bed',          label: 'Beds',         icon: Bed },
  { id: 'sofa',         label: 'Sofas',        icon: Sofa },
  { id: 'wardrobe',     label: 'Wardrobes',    icon: HomeIcon },
  { id: 'fridge',       label: 'Fridge',       icon: Package },
  { id: 'washer',       label: 'Washer/Dryer', icon: Package },
  { id: 'dining',       label: 'Dining table', icon: Package },
  { id: 'tv',           label: 'TVs',          icon: Package },
  { id: 'desk',         label: 'Desks',        icon: Briefcase },
  { id: 'boxes',        label: 'Boxes',        icon: Package },
  { id: 'piano',        label: 'Piano',        icon: Package },
  { id: 'pool-table',   label: 'Pool table',   icon: Package },
  { id: 'gym',          label: 'Gym equip.',   icon: Package },
];

/* Steps depend on service — some skip the property/items steps */
const PROPERTY_RELEVANT = ['house-move', 'office', 'interstate', 'same-day', 'packing'];
const ITEMS_RELEVANT    = ['house-move', 'office', 'interstate', 'same-day', 'furniture', 'loading'];

const timeSlots = [
  '07:00', '08:00', '09:00', '10:00',
  '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00',
];

/* ───────── Component ───────── */

export default function BookingFlow() {
  const [step, setStep] = useState(0);

  // Step 0
  const [service, setService] = useState<string | null>(null);
  // Step 1 (conditional)
  const [size, setSize] = useState<string | null>(null);
  // Step 2 (conditional)
  const [items, setItems] = useState<Record<string, number>>({});
  // Step 3
  const [movers, setMovers] = useState(2);
  const [stairsFrom, setStairsFrom] = useState<'ground' | 'few-steps' | 'flights' | 'lift'>('ground');
  const [stairsTo, setStairsTo] = useState<'ground' | 'few-steps' | 'flights' | 'lift'>('ground');
  const [hasParking, setHasParking] = useState<'yes' | 'tight' | 'no' | null>(null);
  // Step 4
  const [date, setDate] = useState<Date | null>(null);
  // Step 5
  const [time, setTime] = useState<string | null>(null);
  // Step 6
  const [form, setForm] = useState({
    name: '', phone: '', email: '', from: '', to: '', notes: '',
  });
  const [submitting, setSubmitting] = useState(false);

  // Build dynamic step list based on service
  const stepConfig = useMemo(() => {
    const cfg: { key: string; label: string }[] = [{ key: 'service', label: 'Service' }];
    if (service && PROPERTY_RELEVANT.includes(service)) cfg.push({ key: 'size', label: 'Size' });
    if (service && ITEMS_RELEVANT.includes(service))    cfg.push({ key: 'items', label: 'Items' });
    cfg.push({ key: 'access', label: 'Access' });
    cfg.push({ key: 'date',   label: 'Date' });
    cfg.push({ key: 'time',   label: 'Time' });
    cfg.push({ key: 'details',label: 'Details' });
    cfg.push({ key: 'done',   label: 'Done' });
    return cfg;
  }, [service]);

  const currentKey = stepConfig[step]?.key ?? 'service';

  // Auto-suggest movers when size changes
  const handleSizeChange = (id: string) => {
    setSize(id);
    const ps = propertySizes.find(p => p.id === id);
    if (ps) setMovers(ps.suggestedMovers);
  };

  const totalItems = useMemo(
    () => Object.values(items).reduce((a, b) => a + b, 0),
    [items]
  );

  const canNext = useMemo(() => {
    switch (currentKey) {
      case 'service': return !!service;
      case 'size':    return !!size;
      case 'items':   return true; // optional
      case 'access':  return !!hasParking;
      case 'date':    return !!date;
      case 'time':    return !!time;
      case 'details': return !!(form.name && form.phone && form.email && form.from && form.to);
      default:        return false;
    }
  }, [currentKey, service, size, hasParking, date, time, form]);

  const selectedService = services.find((s) => s.id === service);
  const selectedSize    = propertySizes.find((p) => p.id === size);

  const isLastStepBeforeDone = stepConfig[step + 1]?.key === 'done';

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const itemSummary = Object.entries(items)
        .filter(([_, qty]) => qty > 0)
        .map(([id, qty]) => `${qty}x ${itemsCatalog.find(i => i.id === id)?.label}`)
        .join(', ');

      const formatAccessLabel = (v: string) => ({
        'ground': 'Ground floor', 'few-steps': 'Few steps',
        'flights': 'Stairs (no lift)', 'lift': 'Lift access',
      } as Record<string, string>)[v] || v;
      const formatParkingLabel = (v: string | null) => ({
        'yes': 'Easy / driveway', 'tight': 'Tight / street parking',
        'no': 'Restricted parking',
      } as Record<string, string>)[v || ''] || 'Not specified';

      const message = [
        `═══════════════════════════════════`,
        `      NEW BOOKING REQUEST`,
        `═══════════════════════════════════`,
        ``,
        `🚚  SERVICE:        ${selectedService?.label || '—'}`,
        `📅  DATE:           ${date?.toISOString().slice(0, 10) || '—'}`,
        `🕐  TIME:           ${time || '—'}`,
        ``,
        `─── CUSTOMER ───`,
        `👤  Name:           ${form.name}`,
        `📞  Phone:          ${form.phone}`,
        `✉️   Email:          ${form.email}`,
        ``,
        `─── MOVE DETAILS ───`,
        `🏠  Property size:  ${selectedSize?.label || 'Not specified'}`,
        `👥  Crew requested: ${movers} movers`,
        `📦  Items:          ${itemSummary || 'Not specified'}`,
        ``,
        `📍  Moving FROM:    ${form.from}`,
        `📍  Moving TO:      ${form.to}`,
        ``,
        `─── ACCESS & PARKING ───`,
        `🚪  Access (from):  ${formatAccessLabel(stairsFrom)}`,
        `🚪  Access (to):    ${formatAccessLabel(stairsTo)}`,
        `🅿️   Parking:        ${formatParkingLabel(hasParking)}`,
        form.notes ? `\n─── NOTES ───\n${form.notes}` : '',
        ``,
        `═══════════════════════════════════`,
        `Sent from ezzygoremovalist.com.au`,
      ].join('\n');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '1c8483de-a983-4b05-8d7e-db1e6e3074bf',
          subject: `🚚 New Booking — ${selectedService?.label || 'Move'} on ${date?.toISOString().slice(0, 10)} at ${time}`,
          from_name: 'EzzyGo Website',
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message,
          botcheck: '',
        }),
      });

      const pad = (n: number) => String(n).padStart(2, '0');
      const startISO = date
        ? new Date(`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${time || '09:00'}:00`).toISOString()
        : null;
      await supabase.from('bookings').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service_type: selectedService?.label || null,
        start_time: startISO,
        pickup_address: form.from,
        dropoff_address: form.to,
        notes: message,
        source: 'form',
      });
    } catch (_) {}
    setTimeout(() => {
      setSubmitting(false);
      // Find done index dynamically
      const doneIdx = stepConfig.findIndex(s => s.key === 'done');
      setStep(doneIdx);
    }, 800);
  };

  const stepNum = step + 1;
  const totalNonDone = stepConfig.length - 1;

  return (
    <section className="relative overflow-hidden" style={{ background: '#F5F4F1' }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 30%, rgba(255,107,0,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

        {/* ── Step indicator ── */}
        <div className="mb-10 lg:mb-14">
          <div
            className="mb-3 flex items-center justify-between"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#aaa',
            }}
          >
            <span>
              Step {Math.min(stepNum, totalNonDone)} of {totalNonDone}
            </span>
            <span style={{ color: '#FF6B00' }}>
              {currentKey !== 'done' ? stepConfig[step]?.label : 'Confirmed'}
            </span>
          </div>

          <div className="relative h-1.5 overflow-hidden rounded-full" style={{ background: 'rgba(0,0,0,0.08)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: 'linear-gradient(90deg, #FF6B00, #ff8a3d)' }}
              initial={false}
              animate={{ width: `${(stepNum / stepConfig.length) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 28 }}
            />
          </div>
        </div>

        {/* ── Step content ── */}
        <div
          className="rounded-[24px] p-6 sm:p-8 lg:p-12"
          style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', minHeight: 460 }}
        >
          <AnimatePresence mode="wait">

            {/* === SERVICE === */}
            {currentKey === 'service' && (
              <motion.div key="service" {...stepAnim}>
                <StepHeader num="01" title="What are we moving?" desc="Pick the service that fits your move." />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((s) => {
                    const active = service === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setService(s.id)}
                        className="group relative overflow-hidden rounded-[18px] p-5 text-left transition-all duration-200"
                        style={{
                          background: active ? '#FFF7F0' : '#F5F4F1',
                          border: active ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          cursor: 'pointer',
                        }}
                      >
                        {active && <ActiveBadge />}
                        <IconBox><s.icon size={17} style={{ color: '#FF6B00' }} strokeWidth={1.8} /></IconBox>
                        <CardTitle>{s.label}</CardTitle>
                        <div className="mt-2 flex items-center gap-2" style={metaStyle}>
                          <span style={{ color: '#FF6B00' }}>{s.from}</span>
                          <span>·</span>
                          <span>{s.duration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* === SIZE === */}
            {currentKey === 'size' && (
              <motion.div key="size" {...stepAnim}>
                <StepHeader
                  num="02"
                  title="What size place?"
                  desc="Helps us pick the right truck and crew size."
                />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {propertySizes.map((p) => {
                    const active = size === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => handleSizeChange(p.id)}
                        className="group relative overflow-hidden rounded-[18px] p-5 text-center transition-all duration-200"
                        style={{
                          background: active ? '#FFF7F0' : '#F5F4F1',
                          border: active ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          cursor: 'pointer',
                        }}
                      >
                        {active && <ActiveBadge />}
                        <div className="mx-auto" style={{ marginBottom: 10 }}>
                          <IconBox center><p.icon size={17} style={{ color: '#FF6B00' }} strokeWidth={1.8} /></IconBox>
                        </div>
                        <CardTitle center>{p.label}</CardTitle>
                        <div className="mt-1.5" style={{ ...metaStyle, justifyContent: 'center' }}>
                          {p.estHours}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* === ITEMS === */}
            {currentKey === 'items' && (
              <motion.div key="items" {...stepAnim}>
                <StepHeader
                  num={String(step + 1).padStart(2, '0')}
                  title="What's coming with you?"
                  desc={`Rough count of the big stuff — we'll bring the right truck. ${totalItems > 0 ? `(${totalItems} items)` : '(Optional)'}`}
                />

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {itemsCatalog.map((it) => {
                    const qty = items[it.id] || 0;
                    const active = qty > 0;
                    return (
                      <div
                        key={it.id}
                        className="flex items-center justify-between gap-3 rounded-[14px] p-3 pl-4 transition-all duration-200"
                        style={{
                          background: active ? '#FFF7F0' : '#F5F4F1',
                          border: active ? '1.5px solid rgba(255,107,0,0.4)' : '1.5px solid rgba(0,0,0,0.06)',
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              background: 'rgba(255,107,0,0.1)',
                              border: '1px solid rgba(255,107,0,0.2)',
                            }}
                          >
                            <it.icon size={14} style={{ color: '#FF6B00' }} strokeWidth={1.8} />
                          </div>
                          <span
  style={{
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#111',
    letterSpacing: '0.02em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }}
>
  {it.label}
</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setItems({ ...items, [it.id]: Math.max(0, qty - 1) })}
                            disabled={qty === 0}
                            className="flex h-7 w-7 items-center justify-center rounded-full transition-all disabled:opacity-30"
                            style={{
                              background: '#fff',
                              border: '1px solid rgba(0,0,0,0.1)',
                              cursor: qty === 0 ? 'not-allowed' : 'pointer',
                            }}
                          >
                            <Minus size={11} style={{ color: '#666' }} />
                          </button>
                          <span
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontSize: 18,
                              fontWeight: 800,
                              color: active ? '#FF6B00' : '#bbb',
                              minWidth: 16,
                              textAlign: 'center',
                            }}
                          >
                            {qty}
                          </span>
                          <button
                            onClick={() => setItems({ ...items, [it.id]: qty + 1 })}
                            className="flex h-7 w-7 items-center justify-center rounded-full transition-all"
                            style={{
                              background: '#fff',
                              border: '1px solid rgba(0,0,0,0.1)',
                              cursor: 'pointer',
                            }}
                          >
                            <Plus size={11} style={{ color: '#666' }} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p
                  className="mt-6"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: '#aaa',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  No need to be exact — rough numbers help us plan.
                </p>
              </motion.div>
            )}

            {/* === ACCESS & MOVERS === */}
            {currentKey === 'access' && (
              <motion.div key="access" {...stepAnim}>
                <StepHeader
                  num={String(step + 1).padStart(2, '0')}
                  title="Access & crew"
                  desc="A few quick things so we bring the right team and truck."
                />

                {/* Movers */}
                <div className="mb-7">
                  <SubLabel icon={Users} text="How many movers?" />
                  <div className="flex items-center gap-5 rounded-[16px] p-4" style={{ background: '#F5F4F1', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <button
                      onClick={() => setMovers(Math.max(2, movers - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.1)',
                        cursor: movers <= 2 ? 'not-allowed' : 'pointer',
                        opacity: movers <= 2 ? 0.4 : 1,
                      }}
                    >
                      <Minus size={14} style={{ color: '#444' }} />
                    </button>

                    <div className="flex-1 text-center">
                      <motion.div
                        key={movers}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.3 }}
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 44,
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
                        Movers + truck
                        {selectedSize && movers === selectedSize.suggestedMovers && (
                          <span style={{ color: '#FF6B00', marginLeft: 6 }}>· Recommended</span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setMovers(Math.min(5, movers + 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.1)',
                        cursor: movers >= 5 ? 'not-allowed' : 'pointer',
                        opacity: movers >= 5 ? 0.4 : 1,
                      }}
                    >
                      <Plus size={14} style={{ color: '#444' }} />
                    </button>
                  </div>
                </div>

                {/* Stairs - From */}
                <div className="mb-6">
                  <SubLabel text="Access at pickup" />
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { id: 'ground',    label: 'Ground floor' },
                      { id: 'few-steps', label: 'Few steps' },
                      { id: 'flights',   label: 'Stairs (no lift)' },
                      { id: 'lift',      label: 'Lift access' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setStairsFrom(opt.id as any)}
                        className="rounded-[14px] p-3 transition-all duration-200"
                        style={{
                          background: stairsFrom === opt.id ? '#FFF7F0' : '#F5F4F1',
                          border: stairsFrom === opt.id ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: stairsFrom === opt.id ? '#FF6B00' : '#555',
                          cursor: 'pointer',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stairs - To */}
                <div className="mb-6">
                  <SubLabel text="Access at drop-off" />
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      { id: 'ground',    label: 'Ground floor' },
                      { id: 'few-steps', label: 'Few steps' },
                      { id: 'flights',   label: 'Stairs (no lift)' },
                      { id: 'lift',      label: 'Lift access' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setStairsTo(opt.id as any)}
                        className="rounded-[14px] p-3 transition-all duration-200"
                        style={{
                          background: stairsTo === opt.id ? '#FFF7F0' : '#F5F4F1',
                          border: stairsTo === opt.id ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: stairsTo === opt.id ? '#FF6B00' : '#555',
                          cursor: 'pointer',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parking */}
                <div>
                  <SubLabel text="Truck parking access" />
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'yes',   label: 'Easy / driveway' },
                      { id: 'tight', label: 'Tight / street' },
                      { id: 'no',    label: 'Restricted' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setHasParking(opt.id as any)}
                        className="rounded-[14px] p-3 transition-all duration-200"
                        style={{
                          background: hasParking === opt.id ? '#FFF7F0' : '#F5F4F1',
                          border: hasParking === opt.id ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: hasParking === opt.id ? '#FF6B00' : '#555',
                          cursor: 'pointer',
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {(stairsFrom === 'flights' || stairsTo === 'flights' || hasParking === 'no') && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-start gap-3 rounded-[14px] p-4"
                    style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.18)' }}
                  >
                    <TriangleAlert size={16} style={{ color: '#FF6B00', flexShrink: 0, marginTop: 1 }} />
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 13,
                        color: '#555',
                        lineHeight: 1.6,
                      }}
                    >
                      Stairs and restricted access typically add 20-30% to job time. We&apos;ll factor this into your final quote — no surprises.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* === DATE === */}
            {currentKey === 'date' && (
              <motion.div key="date" {...stepAnim}>
                <StepHeader
                  num={String(step + 1).padStart(2, '0')}
                  title="Pick a date"
                  desc="Choose any date in the next 3 months. Same-day jobs subject to availability."
                />
                <Calendar value={date} onChange={setDate} />
              </motion.div>
            )}

            {/* === TIME === */}
            {currentKey === 'time' && (
              <motion.div key="time" {...stepAnim}>
                <StepHeader
                  num={String(step + 1).padStart(2, '0')}
                  title="Pick a time"
                  desc={
                    date
                      ? `What time on ${date.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}?`
                      : 'Choose your preferred start time.'
                  }
                />

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
                  {timeSlots.map((t) => {
                    const active = time === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className="rounded-[14px] py-4 transition-all duration-200"
                        style={{
                          background: active ? '#FF6B00' : '#F5F4F1',
                          border: active ? '1.5px solid #FF6B00' : '1.5px solid rgba(0,0,0,0.06)',
                          color: active ? '#fff' : '#111',
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 17,
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          cursor: 'pointer',
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <div
                  className="mt-6 rounded-[14px] p-4"
                  style={{ background: 'rgba(255,107,0,0.05)', border: '1px solid rgba(255,107,0,0.15)' }}
                >
                  <div
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#FF6B00',
                    }}
                  >
                    <Clock size={12} />
                    Heads up
                  </div>
                  <p className="mt-2" style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13.5, color: '#555', lineHeight: 1.6 }}>
                    Time is the <strong>start time</strong> — we&apos;ll arrive within a 30 min
                    window of this slot. You&apos;ll get a text the day before with the
                    crew&apos;s ETA.
                  </p>
                </div>
              </motion.div>
            )}

            {/* === DETAILS === */}
            {currentKey === 'details' && (
              <motion.div key="details" {...stepAnim}>
                <StepHeader
                  num={String(step + 1).padStart(2, '0')}
                  title="Your details"
                  desc="Last bit — where to and from, plus a way to reach you."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field icon={User}  label="Full name" placeholder="John Smith"        value={form.name}  onChange={(v) => setForm({ ...form, name: v })} />
                  <Field icon={Phone} label="Phone"     placeholder="04XX XXX XXX"      value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
                </div>
                <Field icon={Mail} label="Email" placeholder="you@email.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field icon={MapPin} label="Moving from" placeholder="Suburb or address" value={form.from} onChange={(v) => setForm({ ...form, from: v })} />
                  <Field icon={MapPin} label="Moving to"   placeholder="Suburb or address" value={form.to}   onChange={(v) => setForm({ ...form, to: v })} />
                </div>

                <div className="mt-4">
                  <Label text="Anything else?" />
                  <textarea
                    rows={3}
                    placeholder="Fragile items? Time constraints? Anything that helps us prep."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-[14px] p-4 outline-none transition-all"
                    style={{
                      background: '#F5F4F1',
                      border: '1.5px solid rgba(0,0,0,0.08)',
                      fontFamily: 'inherit',
                      fontSize: 14,
                      color: '#111',
                      resize: 'none',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#FF6B00';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,107,0,0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Summary recap */}
                <div className="mt-6 rounded-[16px] p-5" style={{ background: '#111110', color: '#fff' }}>
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
                    <CheckCircle2 size={12} />
                    Booking summary
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <SummaryItem label="Service"  value={selectedService?.label} />
                    {selectedSize && <SummaryItem label="Size" value={selectedSize.label} />}
                    <SummaryItem label="Movers"   value={`${movers} crew`} />
                    <SummaryItem label="Items"    value={totalItems > 0 ? `${totalItems} items` : 'Not specified'} />
                    <SummaryItem label="Date"     value={date?.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' })} />
                    <SummaryItem label="Time"     value={time || undefined} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* === DONE === */}
            {currentKey === 'done' && (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1, stiffness: 200, damping: 14 }}
                  className="mb-6 flex h-24 w-24 items-center justify-center rounded-full"
                  style={{ background: 'rgba(125,211,252,0.15)', border: '2px solid rgba(125,211,252,0.4)' }}
                >
                  <CheckCircle2 size={44} style={{ color: '#0EA5E9' }} strokeWidth={2} />
                </motion.div>

                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: 900,
                    lineHeight: 0.95,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#111',
                  }}
                >
                  You&apos;re booked,
                  <br />
                  <em style={{ fontStyle: 'italic', color: '#FF6B00' }}>
                    {form.name.split(' ')[0] || 'mate'}!
                  </em>
                </h2>

                <p
                  className="mt-5 max-w-md"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, color: '#555', lineHeight: 1.7 }}
                >
                  We&apos;ll text you within the hour to confirm the crew and lock in the details. Check your inbox for a copy of your booking.
                </p>

                <div className="mt-8 grid w-full max-w-md gap-2 rounded-[16px] p-5 text-left" style={{ background: '#F5F4F1', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <Recap label="Service" value={selectedService?.label} />
                  {selectedSize && <Recap label="Size" value={selectedSize.label} />}
                  <Recap label="Movers" value={`${movers} crew`} />
                  {totalItems > 0 && <Recap label="Items" value={`${totalItems}`} />}
                  <Recap label="Date" value={date?.toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} />
                  <Recap label="Time" value={time} />
                  <Recap label="From" value={form.from} />
                  <Recap label="To"   value={form.to} />
                </div>

                <a
                  href="/"
                  className="mt-8 flex items-center justify-center gap-2 rounded-[14px] px-8 py-4 transition-all duration-200"
                  style={{
                    background: '#FF6B00',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 16,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 8px 28px rgba(255,107,0,0.35)',
                  }}
                >
                  Back to home
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Nav buttons ── */}
        {currentKey !== 'done' && (
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="flex items-center gap-2 rounded-[14px] px-5 py-3.5 transition-all duration-200 disabled:opacity-30"
              style={{
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.08)',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 15,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#444',
                cursor: step === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <ArrowLeft size={14} />
              Back
            </button>

            {!isLastStepBeforeDone ? (
              <button
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="flex items-center gap-2 rounded-[14px] px-7 py-3.5 transition-all duration-200"
                style={{
                  background: canNext ? '#FF6B00' : 'rgba(0,0,0,0.08)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: canNext ? '#fff' : '#aaa',
                  cursor: canNext ? 'pointer' : 'not-allowed',
                  boxShadow: canNext ? '0 8px 24px rgba(255,107,0,0.35)' : 'none',
                }}
              >
                Continue
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => canNext && handleSubmit()}
                disabled={!canNext || submitting}
                className="flex items-center gap-2 rounded-[14px] px-7 py-3.5 transition-all duration-200"
                style={{
                  background: canNext ? '#FF6B00' : 'rgba(0,0,0,0.08)',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: canNext ? '#fff' : '#aaa',
                  cursor: canNext ? 'pointer' : 'not-allowed',
                  boxShadow: canNext ? '0 8px 24px rgba(255,107,0,0.35)' : 'none',
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? 'Booking...' : 'Confirm booking'}
                {!submitting && <Check size={14} strokeWidth={3} />}
                {submitting && (
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.4)',
                      borderTopColor: '#fff',
                      animation: 'spin 0.7s linear infinite',
                      display: 'inline-block',
                    }}
                  />
                )}
              </button>
            )}
          </div>
        )}

        {currentKey !== 'done' && (
          <p
            className="mt-8 text-center"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#aaa',
            }}
          >
            Need help? Call us:{' '}
            <a href="tel:+61481356811" style={{ color: '#FF6B00', textDecoration: 'none', fontWeight: 700 }}>
              +61 481 356 811
            </a>
          </p>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

/* ───────── Helpers ───────── */

const stepAnim = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -20 },
  transition: { duration: 0.3 },
};

const metaStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace",
  fontSize: 9,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#888',
};

function ActiveBadge() {
  return (
    <div
      className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full"
      style={{ background: '#FF6B00' }}
    >
      <Check size={11} color="#fff" strokeWidth={3} />
    </div>
  );
}

function IconBox({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-xl ${center ? '' : 'mb-3'}`}
      style={{
        background: 'rgba(255,107,0,0.1)',
        border: '1px solid rgba(255,107,0,0.2)',
      }}
    >
      {children}
    </div>
  );
}

function CardTitle({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 16,
        fontWeight: 800,
        textTransform: 'uppercase',
        color: '#111',
        letterSpacing: '0.02em',
        lineHeight: 1.15,
        textAlign: center ? 'center' : 'left',
      }}
    >
      {children}
    </div>
  );
}

function StepHeader({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="mb-8">
      <div
        className="mb-3 flex items-center gap-2"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#FF6B00',
        }}
      >
        <span style={{ display: 'inline-block', width: 20, height: 1, background: '#FF6B00' }} />
        Step {num}
      </div>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(28px, 3.5vw, 44px)',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          color: '#111',
          marginBottom: 8,
        }}
      >
        {title}
      </h2>
      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#666', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  );
}

function SubLabel({ icon: Icon, text }: { icon?: any; text: string }) {
  return (
    <div
      className="mb-3 flex items-center gap-2"
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#888',
        fontWeight: 700,
      }}
    >
      {Icon && <Icon size={12} style={{ color: '#FF6B00' }} />}
      {text}
    </div>
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
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
}: {
  icon: any;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="mb-4 sm:mb-0">
      <Label text={label} />
      <div className="relative">
        <Icon
          size={15}
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ color: focused ? '#FF6B00' : '#aaa' }}
        />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-[14px] py-3.5 pl-11 pr-4 outline-none transition-all"
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
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: 3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          textTransform: 'uppercase',
          color: '#fff',
          letterSpacing: '0.02em',
        }}
      >
        {value || '—'}
      </div>
    </div>
  );
}

function Recap({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="flex items-center justify-between gap-4 border-b border-black/5 py-2 last:border-0">
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#888',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 15,
          fontWeight: 700,
          color: '#111',
          letterSpacing: '0.02em',
          textAlign: 'right',
        }}
      >
        {value}
      </span>
    </div>
  );
}

/* ───────── Calendar ───────── */

function Calendar({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewMonth, setViewMonth] = useState(() => {
    const d = new Date(today);
    d.setDate(1);
    return d;
  });

  const monthName = viewMonth.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });

  const days = useMemo(() => {
    const year = viewMonth.getFullYear();
    const month = viewMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = (firstDay.getDay() + 6) % 7;
    const totalDays = lastDay.getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startOffset; i++) cells.push(null);
    for (let d = 1; d <= totalDays; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [viewMonth]);

  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setMonth(d.getMonth() + 3);
    return d;
  }, [today]);

  const canPrev = useMemo(() => {
    const prev = new Date(viewMonth);
    prev.setMonth(prev.getMonth() - 1);
    const cmp = new Date(today.getFullYear(), today.getMonth(), 1);
    return prev >= cmp;
  }, [viewMonth, today]);

  const canNextMonth = useMemo(() => {
    const next = new Date(viewMonth);
    next.setMonth(next.getMonth() + 1);
    return next <= maxDate;
  }, [viewMonth, maxDate]);

  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div>
  <div className="mb-5 flex items-center justify-between">
        <button
          onClick={() => {
            if (!canPrev) return;
            const d = new Date(viewMonth);
            d.setMonth(d.getMonth() - 1);
            setViewMonth(d);
          }}
          disabled={!canPrev}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 disabled:opacity-30"
          style={{
            background: 'rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.08)',
            cursor: canPrev ? 'pointer' : 'not-allowed',
          }}
        >
          <ChevronLeft size={16} style={{ color: '#444' }} />
        </button>

        <div
          className="flex items-center gap-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 'clamp(22px, 2.5vw, 28px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#111',
            letterSpacing: '0.02em',
          }}
        >
          <CalendarDays size={20} style={{ color: '#FF6B00' }} />
          {monthName}
        </div>

        <button
          onClick={() => {
            if (!canNextMonth) return;
            const d = new Date(viewMonth);
            d.setMonth(d.getMonth() + 1);
            setViewMonth(d);
          }}
          disabled={!canNextMonth}
          className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 disabled:opacity-30"
          style={{
            background: 'rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.08)',
            cursor: canNextMonth ? 'pointer' : 'not-allowed',
          }}
        >
          <ChevronRight size={16} style={{ color: '#444' }} />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1.5 sm:gap-2">
        {dayLabels.map((d, i) => (
          <div
            key={i}
            className="text-center"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#aaa',
              paddingBottom: 6,
            }}
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {days.map((d, i) => {
          if (!d) return <div key={i} />;
          const disabled = d < today || d > maxDate;
          const selected = value && d.toDateString() === value.toDateString();
          const isToday = d.toDateString() === today.toDateString();
          return (
            <button
              key={i}
              onClick={() => !disabled && onChange(d)}
              disabled={disabled}
              className="relative aspect-square rounded-[12px] transition-all duration-200"
              style={{
                background: selected ? '#FF6B00' : isToday ? 'rgba(255,107,0,0.08)' : '#F5F4F1',
                border: selected ? '1.5px solid #FF6B00' : isToday ? '1.5px solid rgba(255,107,0,0.3)' : '1.5px solid transparent',
                color: selected ? '#fff' : disabled ? '#ccc' : '#111',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                fontWeight: selected ? 900 : 700,
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.4 : 1,
                boxShadow: selected ? '0 6px 20px rgba(255,107,0,0.35)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!disabled && !selected) {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!disabled && !selected) {
                  e.currentTarget.style.background = isToday ? 'rgba(255,107,0,0.08)' : '#F5F4F1';
                  e.currentTarget.style.borderColor = isToday ? 'rgba(255,107,0,0.3)' : 'transparent';
                }
              }}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <div
        className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#888',
        }}
      >
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#FF6B00' }} />
          Selected
        </span>
        <span className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: 'rgba(255,107,0,0.1)', border: '1.5px solid rgba(255,107,0,0.4)' }}
          />
          Today
        </span>
      </div>
    </div>
  );
}
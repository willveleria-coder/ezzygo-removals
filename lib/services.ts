import {
  Package,
  Truck,
  Home,
  Briefcase,
  Sofa,
  Warehouse,
  MapPinned,
  Clock,
  HousePlus,
  PackageCheck,
  LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  n: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  short: string;
  description: string;
  duration: string;
  from: string;
  heroImage: string;
  inclusions: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'packing-service',
    n: '01',
    icon: Package,
    title: 'Packing Service',
    tagline: 'Efficient and reliable packing for your move.',
    short: 'Premium materials, efficient packing. We treat your stuff like it\'s ours.',
    description:
      'Our packing service is built for people who want their move done right — without lifting a finger. We bring premium boxes, bubble wrap, tape, and protective padding. Every item is carefully wrapped, labelled, and packed by room so unpacking is a breeze.',
    duration: '2 hours',
    from: '$249',
    heroImage:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1600&q=80',
    inclusions: [
      'Premium quality moving boxes',
      'Bubble wrap, packing paper, tape',
      'Fragile item protection',
      'Room-by-room labelling',
      'Furniture wrapping and padding',
      'Disassembly of items if needed',
    ],
    process: [
      {
        step: '01',
        title: 'Walkthrough',
        desc: 'We arrive on time and do a quick walkthrough to plan the most efficient pack.',
      },
      {
        step: '02',
        title: 'Careful packing',
        desc: 'Fragile items wrapped first, heavy items packed for safety, everything labelled.',
      },
      {
        step: '03',
        title: 'Ready to roll',
        desc: 'Boxes stacked by destination room. You\'re ready to load or store.',
      },
    ],
    faqs: [
      {
        q: 'Do I need to supply boxes?',
        a: 'Nope. We bring all materials — boxes, tape, bubble wrap, padding. Just point at your stuff.',
      },
      {
        q: 'How long does packing take?',
        a: 'A 1-bedroom takes around 2 hours; a 3-bedroom around 4–5. We work fast without being rough.',
      },
      {
        q: 'Can you pack just the fragile stuff?',
        a: 'Yes — partial packing is fine. Pay only for what we do.',
      },
    ],
  },
  {
    slug: 'loading-unloading',
    n: '02',
    icon: Truck,
    title: 'Loading & Unloading',
    tagline: 'Safe and timely transport of your household items.',
    short: 'Trained crew, padded everything. Your items handled with care.',
    description:
      'Already packed? We\'ve got the muscle. Our loading and unloading service is for when you need a strong, careful crew to get everything onto and off the truck safely. We use blankets, straps, trolleys and dollies — no scuffed walls, no broken furniture.',
    duration: '1.5 hours',
    from: '$199',
    heroImage:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80',
    inclusions: [
      'Two or more experienced movers',
      'Furniture blankets and straps',
      'Trolleys, dollies, hand-trucks',
      'Floor and wall protection',
      'Strategic load planning',
      'Careful unloading at destination',
    ],
    process: [
      {
        step: '01',
        title: 'Site protection',
        desc: 'We protect floors, doorways, and corners before lifting a single box.',
      },
      {
        step: '02',
        title: 'Smart loading',
        desc: 'Heaviest items first, fragile items secured. Truck packed tight to prevent shifting.',
      },
      {
        step: '03',
        title: 'Careful unload',
        desc: 'Boxes placed in the right rooms at the destination. We don\'t just dump and run.',
      },
    ],
    faqs: [
      {
        q: 'Do you supply the truck?',
        a: 'Yes — our trucks come with the crew. 6, 8, or 10-tonne depending on the move size.',
      },
      {
        q: 'What if my move takes longer than booked?',
        a: 'We bill in 15-minute increments. No surprises — you only pay for time actually used.',
      },
      {
        q: 'Can you handle pianos or pool tables?',
        a: 'Yes, with prior notice. These need specific equipment so we plan ahead.',
      },
    ],
  },
  {
    slug: 'full-service-move',
    n: '03',
    icon: Home,
    title: 'Full Service Move',
    tagline: 'Start your new chapter with ease and efficiency.',
    short: 'Door-to-door white-glove service. Pack, transport, unpack, done.',
    description:
      'The whole package — done by us, end to end. We pack everything in your old place, load it, transport it, unload it, and unpack at your new home. You walk in, your stuff is already in the right rooms, and you don\'t open a single box unless you want to.',
    duration: '4 hours',
    from: '$899',
    heroImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    inclusions: [
      'Full pack at origin',
      'Furniture disassembly',
      'Loading onto truck',
      'Door-to-door transport',
      'Unloading at destination',
      'Reassembly + room placement',
      'Optional unpack & box removal',
    ],
    process: [
      {
        step: '01',
        title: 'Pre-move plan',
        desc: 'We chat by phone, lock in a date and crew size, send a fixed quote.',
      },
      {
        step: '02',
        title: 'Pack & load',
        desc: 'Crew arrives, packs everything room-by-room, loads the truck.',
      },
      {
        step: '03',
        title: 'Transport',
        desc: 'Direct route to your new home. You can meet us there or hand over keys.',
      },
      {
        step: '04',
        title: 'Set up',
        desc: 'Furniture reassembled, boxes in the right rooms. Optional unpack.',
      },
    ],
    faqs: [
      {
        q: 'How much does a full service move cost?',
        a: 'For a 2-bedroom home, around $1,200–$1,800. We give a fixed quote after a quick walkthrough or video call.',
      },
      {
        q: 'How far in advance should I book?',
        a: '1–2 weeks ideal. We do same-day where the calendar allows.',
      },
      {
        q: 'Are my items insured?',
        a: 'Yes — full goods-in-transit insurance on every full service move. No extra charge.',
      },
    ],
  },
  {
    slug: 'home-removals',
    n: '04',
    icon: HousePlus,
    title: 'Home Removals',
    tagline: 'Moving made simple, every step of the way.',
    short: 'House moves big or small, anywhere across Queensland.',
    description:
      'House moves are our bread and butter. Whether it\'s a studio apartment or a five-bedroom family home, we\'ve done it hundreds of times across Queensland. Local crew, local trucks, local knowledge — we know the streets, the traffic, and the building access rules.',
    duration: '4 hours',
    from: '$679',
    heroImage:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1600&q=80',
    inclusions: [
      'Pre-move walkthrough',
      'Experienced 2–4 mover crew',
      'Truck with blankets and straps',
      'Disassembly and reassembly',
      'Door-to-door transport',
      'Full insurance coverage',
    ],
    process: [
      {
        step: '01',
        title: 'Book online',
        desc: 'Use our quote calculator or call. We confirm by text in minutes.',
      },
      {
        step: '02',
        title: 'Move day',
        desc: 'Crew arrives in uniform, ready to work. We get straight into it.',
      },
      {
        step: '03',
        title: 'Welcome home',
        desc: 'Everything in your new place, where you want it. Done.',
      },
    ],
    faqs: [
      {
        q: 'Do you move on weekends?',
        a: 'Yes — Saturday and Sunday at no extra charge. Public holidays may have a small surcharge.',
      },
      {
        q: 'What if my new place isn\'t ready yet?',
        a: 'We offer same-day storage — items stay on the truck or in our depot until you\'re ready.',
      },
      {
        q: 'How is the cost calculated?',
        a: 'Hourly rate × time + travel. Quote calculator on the home page gives you a live estimate.',
      },
    ],
  },
  {
    slug: 'office-relocations',
    n: '05',
    icon: Briefcase,
    title: 'Office Relocations',
    tagline: 'Your business move, made easy.',
    short: 'Zero downtime. After-hours and weekends welcome.',
    description:
      'Moving an office means moving a business. We get that. Our office relocation crews work after hours, overnight, or across a weekend so your team comes back on Monday to a fully set-up space. Desks, monitors, server racks, files — everything handled with care.',
    duration: '1 hour+',
    from: '$499',
    heroImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    inclusions: [
      'After-hours and weekend service',
      'Desk and workstation disassembly',
      'Secure file and IT transport',
      'Server and equipment handling',
      'Reassembly at new location',
      'Minimal business downtime',
    ],
    process: [
      {
        step: '01',
        title: 'Site visit',
        desc: 'We come see the office, plan the move, give a fixed quote.',
      },
      {
        step: '02',
        title: 'After-hours move',
        desc: 'We work Friday night through Sunday so your team isn\'t disrupted.',
      },
      {
        step: '03',
        title: 'Monday ready',
        desc: 'Workstations set up, IT in place. Your team walks in and gets to work.',
      },
    ],
    faqs: [
      {
        q: 'Can you handle IT equipment?',
        a: 'Yes — we crate and transport servers, monitors, and workstations with anti-static protection.',
      },
      {
        q: 'Do you work after hours?',
        a: 'Every office move is after-hours by default unless you say otherwise. No extra fee.',
      },
      {
        q: 'What about confidential files?',
        a: 'Locked file boxes available on request. Crew is background-checked and bonded.',
      },
    ],
  },
  {
    slug: 'furniture-transport',
    n: '06',
    icon: Sofa,
    title: 'Furniture Transport',
    tagline: 'Your furniture, handled with care — every step of the way.',
    short: 'Single items or whole loads. Furniture delivery and marketplace pickups.',
    description:
      'Bought a couch on Marketplace? Sold a dining table on Gumtree? Need that vintage cabinet from your grandma\'s place across town? We do single-item furniture transport every day. Cheaper than hiring a van, faster than borrowing your mate\'s ute.',
    duration: '2 hours',
    from: '$169',
    heroImage:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80',
    inclusions: [
      'Single or multi-item pickup',
      'Furniture blankets and straps',
      'Two movers (heavy item ready)',
      'Door-to-door delivery',
      'Stairs and tight spaces',
      'Insurance during transport',
    ],
    process: [
      {
        step: '01',
        title: 'Send us the item',
        desc: 'A photo and the two addresses is all we need to quote you.',
      },
      {
        step: '02',
        title: 'Pickup',
        desc: 'We arrive on time, lift carefully, secure for transport.',
      },
      {
        step: '03',
        title: 'Delivery',
        desc: 'Drop-off where you want it — even up the stairs.',
      },
    ],
    faqs: [
      {
        q: 'How much for a single couch across town?',
        a: 'Usually $150–$250 depending on distance and access. Quote in 2 minutes by text.',
      },
      {
        q: 'Can you pick up from a store?',
        a: 'Yes — IKEA, marketplaces, warehouses, all good. We\'ll bring the paperwork if needed.',
      },
      {
        q: 'What if it doesn\'t fit?',
        a: 'We measure twice before lifting. If access is impossible we won\'t charge for the failed attempt.',
      },
    ],
  },
  {
    slug: 'storage-solutions',
    n: '07',
    icon: Warehouse,
    title: 'Storage Solutions',
    tagline: 'Keep your belongings safe and sound, flexibly.',
    short: 'Secure short and long-term storage. Climate-safe, flexible plans.',
    description:
      'Selling your house but new place isn\'t ready? Renovating and need things out of the way? We offer secure short and long-term storage in clean, climate-controlled units. Move in, store, and pull out whenever you need — no long contracts.',
    duration: '1 hour',
    from: '$45/wk',
    heroImage:
      'https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=1600&q=80',
    inclusions: [
      'Clean, dry, climate-safe units',
      'Short or long-term plans',
      'Drop off + collection available',
      '24/7 monitored security',
      'Insurance available',
      'Move-in / move-out support',
    ],
    process: [
      {
        step: '01',
        title: 'Choose your size',
        desc: 'Small unit for boxes, large for whole home. We help you pick.',
      },
      {
        step: '02',
        title: 'Move in',
        desc: 'Drop your stuff or we collect it. Inventory recorded for peace of mind.',
      },
      {
        step: '03',
        title: 'Access anytime',
        desc: 'Book a visit to grab what you need. Or have us deliver.',
      },
    ],
    faqs: [
      {
        q: 'Minimum storage term?',
        a: 'One week. After that you can extend by the week or month with zero notice.',
      },
      {
        q: 'Is my stuff insured?',
        a: 'Basic cover included. Higher-value cover available — ask for a quote.',
      },
      {
        q: 'Can you collect and deliver later?',
        a: 'Yes — that\'s our most popular option. Move + store + redeliver all in one.',
      },
    ],
  },
  {
    slug: 'interstate-moves',
    n: '08',
    icon: MapPinned,
    title: 'Interstate Moves',
    tagline: 'Your seamless journey to a new state.',
    short: 'Crossing state lines? We\'ll get you there safely, on time, in one piece.',
    description:
      'Moving to NSW, VIC, or anywhere down south? We run regular interstate routes from Queensland. Fixed quotes, single-vehicle moves (no transfers, no shared trucks unless you opt in), real-time tracking, and full insurance for the long haul.',
    duration: '6 hours',
    from: '$2,499',
    heroImage:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80',
    inclusions: [
      'Door-to-door interstate transport',
      'Dedicated vehicle (no transfers)',
      'Real-time GPS tracking',
      'Full goods-in-transit insurance',
      'Loading and unloading included',
      'Fixed quote — no surprises',
    ],
    process: [
      {
        step: '01',
        title: 'Plan + quote',
        desc: 'We get all the details, lock in dates, send a fixed all-in price.',
      },
      {
        step: '02',
        title: 'Pickup day',
        desc: 'Crew loads carefully, you get a tracking link, we hit the road.',
      },
      {
        step: '03',
        title: 'Delivery',
        desc: 'Same crew delivers. No transfers, no warehouses, no waiting.',
      },
    ],
    faqs: [
      {
        q: 'How long does QLD to VIC take?',
        a: '2–3 days door-to-door for dedicated runs. Faster on premium service.',
      },
      {
        q: 'Are shared loads cheaper?',
        a: 'Yes — if you can be flexible on dates we can split a truck with another client. Save up to 40%.',
      },
      {
        q: 'What\'s the cheapest state to move to?',
        a: 'Northern NSW is closest. Sydney and Melbourne are the most popular routes — we run them weekly.',
      },
    ],
  },
  {
    slug: 'same-day-moves',
    n: '09',
    icon: Clock,
    title: 'Same-Day Moves',
    tagline: 'Your urgent move, handled with speed and care.',
    short: 'Urgent? No worries. Subject to availability, we\'ll be there today.',
    description:
      'Lease ending tonight? Sudden change of plans? We keep slots open every day for same-day jobs. Call before midday and we\'ll usually be there before dinner — same hourly rate, no panic premium.',
    duration: '4 hours',
    from: '$249',
    heroImage:
      'https://images.unsplash.com/photo-1623861397259-d8c5fb4a3e8b?w=1600&q=80',
    inclusions: [
      'Same-day availability',
      'No urgent-booking surcharge',
      'Standard hourly rates',
      'Full crew + truck',
      'Quick pre-move call',
      'Insurance included',
    ],
    process: [
      {
        step: '01',
        title: 'Call us',
        desc: 'Phone before noon — we check the calendar and confirm in 5 minutes.',
      },
      {
        step: '02',
        title: 'We dispatch',
        desc: 'Crew heads your way same day with the right size truck.',
      },
      {
        step: '03',
        title: 'Done by tonight',
        desc: 'Most same-day moves wrap before dinner. Stress over.',
      },
    ],
    faqs: [
      {
        q: 'Is there an urgent surcharge?',
        a: 'No — same-day moves are priced at our standard hourly rate. We just charge for actual time used.',
      },
      {
        q: 'How late can I call?',
        a: 'Best to call before midday. Afternoon calls are subject to crew availability.',
      },
      {
        q: 'Can I book the night before?',
        a: 'Yes — and we recommend it if you want to lock in a guaranteed slot.',
      },
    ],
  },
  {
    slug: 'local-brisbane-moves',
    n: '10',
    icon: PackageCheck,
    title: 'Local Brisbane Moves',
    tagline: 'Making your local Brisbane move a breeze.',
    short: 'Quick, affordable, expert local moves within Brisbane.',
    description:
      'We know Brisbane. Every suburb, every tight street, every tricky highrise loading dock. Local Brisbane moves are quick, affordable, and stress-free — usually under half a day for a 2-bedroom unit.',
    duration: '3 hours',
    from: '$199',
    heroImage:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80',
    inclusions: [
      'Local Brisbane crew',
      'Knowledge of every suburb',
      'Highrise / unit specialists',
      'Trolleys for long hallways',
      'Half-day rates available',
      'Full insurance',
    ],
    process: [
      {
        step: '01',
        title: 'Quick quote',
        desc: 'Send us the two addresses. We quote in minutes.',
      },
      {
        step: '02',
        title: 'Crew arrives',
        desc: 'On time, every time. Local crew that knows your area.',
      },
      {
        step: '03',
        title: 'Done by lunch',
        desc: 'Most local moves wrap in 3–4 hours. You\'re unpacking by afternoon.',
      },
    ],
    faqs: [
      {
        q: 'Do you do highrise apartments?',
        a: 'All the time. We coordinate with building managers and book the lift if needed.',
      },
      {
        q: 'How quick is a 2-bedroom?',
        a: '3–4 hours start to finish for most local Brisbane moves.',
      },
      {
        q: 'Do you cover Gold Coast / Sunshine Coast?',
        a: 'Yes — same crew, same rates. Just call out the suburb when you book.',
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
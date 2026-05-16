export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  category: 'Moving Tips' | 'Packing Guide' | 'Cost & Pricing' | 'Local Guide';
  author: string;
  body: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: 'how-to-prepare-for-moving-day',
    title: 'How to prepare for moving day (the realistic guide)',
    excerpt:
      'Most "moving day prep" lists are written by people who don\'t move things for a living. Here\'s what actually matters.',
    date: '2025-09-12',
    readTime: '6 min',
    category: 'Moving Tips',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'After 2,400+ moves, we\'ve seen what makes a move smooth and what makes it stressful. The good news: most of the stress is avoidable with a few hours of prep the night before. Here\'s the realistic version of what to do.',
        ],
      },
      {
        heading: 'Pack the essentials box last (and unload it first)',
        paragraphs: [
          'One box per person with: toothbrush, change of clothes, phone charger, painkillers, tea/coffee, kettle, mugs, toilet paper, snacks. Loaded last onto the truck so it comes off first at the new place. You\'ll thank yourself at 8pm when you\'re too tired to dig through 30 boxes.',
        ],
      },
      {
        heading: 'Label boxes by room, not by contents',
        paragraphs: [
          '"Kitchen — fragile" beats "plates and bowls and that thing from the second shelf". Our crew can drop a box in the right room in 2 seconds with a room label. Without one, everything ends up in the living room.',
        ],
      },
      {
        heading: 'Empty drawers, but not too thoroughly',
        paragraphs: [
          'Soft items (socks, t-shirts, towels) can stay in drawers — saves you packing them. Heavy items (books, files, kitchenware) must come out or the drawer can break under its own weight when we lift the dresser. As a rule: if it\'s lighter than a stack of paper, leave it. Heavier, pack it.',
        ],
      },
      {
        heading: 'Disconnect appliances the night before',
        paragraphs: [
          'Fridge defrosted and drained. Washing machine drained and transit bolts back in (find the manual on Google). Disconnect electronics and wrap cables with a rubber band — we always run out of time when these get tangled. If you\'ve got a smart TV mounted, take it off the wall before we arrive.',
        ],
      },
      {
        heading: 'Park clearance and access',
        paragraphs: [
          'Move your own car off the driveway. Tell us about narrow streets, low-hanging branches, dodgy gates. If your new place is in a unit complex, book the lift if your building requires it (most do for moves >2 hours).',
        ],
      },
      {
        heading: 'The last 24 hours',
        paragraphs: [
          'Pack a "first night" bag for everyone in the family — same idea as the essentials box but for bedding, pajamas, and the kids\' favourite toys. The crew will work fast but unpacking a king bed is a one-hour job. You want a soft place to land.',
        ],
      },
    ],
  },
  {
    slug: 'what-does-a-removalist-actually-cost',
    title: 'What does a removalist actually cost in Queensland?',
    excerpt:
      'Most quotes online are vague. Here\'s a real breakdown of what you\'ll pay for a move in QLD, by home size.',
    date: '2025-09-05',
    readTime: '5 min',
    category: 'Cost & Pricing',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'Removalists love to advertise hourly rates without telling you how many hours the job takes. The result: a "$149/hr" company can quietly turn into a $1,800 move. Here\'s the honest breakdown by home size for moves within South East Queensland.',
        ],
      },
      {
        heading: 'Studio / 1 bedroom',
        paragraphs: [
          'Typically 2-3 hours with 2 movers and a 6-tonne truck. Budget $400-$780 all up for a local move within Brisbane, Gold Coast, or Sunshine Coast.',
        ],
      },
      {
        heading: '2 bedroom unit or small house',
        paragraphs: [
          'Usually 4 hours with 2 movers. Budget $720-$1,090 for a local move. Add $100-200 if you\'re crossing between Brisbane and Gold Coast/Sunshine Coast.',
        ],
      },
      {
        heading: '3 bedroom house',
        paragraphs: [
          '5-7 hours with 3 movers. Budget $1,090-$1,520 local. We almost always recommend 3 movers for a 3-bedroom — the extra hourly rate ($219/hr vs $169/hr) pays for itself in saved time.',
        ],
      },
      {
        heading: '4-5 bedroom family home',
        paragraphs: [
          'Full day job — 7-9 hours with 3-4 movers. Budget $1,520-$2,200. Pre-pack the night before to keep this from running into overtime.',
        ],
      },
      {
        heading: 'What adds to the cost',
        paragraphs: [
          'A few things genuinely cost more — and you should be wary of quotes that don\'t mention them.',
        ],
        list: [
          'Stairs and walk-ups (slows the job 20-30%)',
          'Long carries from truck to door',
          'Packing service if requested',
          'Special items (piano, pool table, gun safe)',
          'Interstate moves (priced flat, not hourly)',
          'After-hours, weekends, public holidays',
        ],
      },
      {
        heading: 'What shouldn\'t cost extra',
        paragraphs: [
          'Some companies sneak these in. Watch out for:',
        ],
        list: [
          'GST (must be included in the quote)',
          'Insurance (basic cover should be standard)',
          'Trolleys, blankets, straps (all should be included)',
          'Travel time between properties',
        ],
      },
    ],
  },
  {
    slug: 'packing-fragile-items-properly',
    title: 'How to pack fragile items so nothing breaks',
    excerpt:
      'A 20-minute pack job saves $500 in broken stuff. Here\'s how the pros do it.',
    date: '2025-08-22',
    readTime: '4 min',
    category: 'Packing Guide',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'About 80% of breakages happen in 10% of items — glasses, plates, picture frames, electronics. If you nail the packing for those, you\'re basically safe. Here\'s our crew\'s playbook.',
        ],
      },
      {
        heading: 'Glasses and stemware',
        paragraphs: [
          'Stuff each glass with packing paper first — this stops the stem snapping under pressure. Wrap individually. Stand them upright in the box (never on their sides). Use a small/medium box, never a large one — too much weight crushes the bottom layer.',
        ],
      },
      {
        heading: 'Plates and bowls',
        paragraphs: [
          'Stack vertically like records, not flat. They\'re structurally stronger on their edges than flat. Wrap each one in paper, with cardboard separators between stacks of 4-5.',
        ],
      },
      {
        heading: 'TVs and monitors',
        paragraphs: [
          'Original boxes are best if you still have them. Otherwise: wrap in a blanket, then bubble wrap, then transport flat or upright (never face down). If you mounted it on the wall, dismount it the night before so we don\'t need to figure out your bracket on move day.',
        ],
      },
      {
        heading: 'Picture frames and mirrors',
        paragraphs: [
          'Tape a giant X across the glass (this contains the shatter if it cracks). Wrap in bubble wrap. Stand vertically in the truck, between mattresses if possible.',
        ],
      },
      {
        heading: 'Wine and bottles',
        paragraphs: [
          'Wine boxes from a bottle shop are perfect — most will give them away free if you ask. Don\'t mix wine with anything heavy. Wine doesn\'t love big temperature swings, so don\'t leave the box in a hot truck for hours if you can avoid it.',
        ],
      },
      {
        paragraphs: [
          'Or — and we say this with bias — pay us $250 to do the whole pack for you. It takes us 2 hours what would take you 5, and nothing breaks. Up to you.',
        ],
      },
    ],
  },
  {
    slug: 'moving-from-brisbane-to-gold-coast',
    title: 'Moving from Brisbane to the Gold Coast: what to know',
    excerpt:
      'The most common move we do. Here\'s what\'s different about a Brisbane → GC relocation and how to keep it smooth.',
    date: '2025-08-10',
    readTime: '5 min',
    category: 'Local Guide',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'About 1 in 5 of our moves is Brisbane to Gold Coast. It\'s a great move — same state, same daylight savings (none), same vibe — but there are a few specifics worth knowing.',
        ],
      },
      {
        heading: 'It\'s closer than people think',
        paragraphs: [
          'Brisbane CBD to Surfers is around 75km — usually 50 min off-peak. We can comfortably do a Brisbane → GC move in a single day. Plan an 8am start at the Brisbane end if you want to be done before peak hour traffic back.',
        ],
      },
      {
        heading: 'The M1 is the wildcard',
        paragraphs: [
          'Friday afternoons and Sunday evenings on the M1 can add an hour. We avoid these where possible. If you\'re flexible, a Tuesday or Wednesday move can save real time.',
        ],
      },
      {
        heading: 'Highrise rules are different on the Coast',
        paragraphs: [
          'Surfers Paradise and Broadbeach buildings often have strict lift booking rules — usually 48 hours\' notice and a specific 2-hour move-in window. We\'ll handle the coordination but tell us your building when you book so we don\'t arrive at 9am and find the lift booked for noon.',
        ],
      },
      {
        heading: 'What it usually costs',
        paragraphs: [
          'A 2-bedroom Brisbane to Gold Coast move is typically $920-$1,290. A 3-bedroom $1,290-$1,720. We charge our normal hourly rate plus a small travel surcharge that covers the M1 run.',
        ],
      },
      {
        heading: 'What changes after the move',
        paragraphs: [
          'Your power, gas and internet should be transferred 1-2 weeks ahead. Australia Post will redirect mail for 12 months from $33. Update your driver\'s license address within 14 days (you can do it online). The Gold Coast doesn\'t have separate council tax but rates are sometimes higher.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-a-removalist',
    title: 'How to choose a removalist (without getting burned)',
    excerpt:
      'There are good removalists and bad ones. Here are the 6 questions that separate them.',
    date: '2025-07-28',
    readTime: '4 min',
    category: 'Moving Tips',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'Most people pick a removalist by price and hope for the best. After moving 2,400+ houses, here are the questions that actually predict whether you\'ll have a good experience.',
        ],
      },
      {
        heading: '1. "Are you insured for goods in transit?"',
        paragraphs: [
          'Should be a quick yes with a policy name. If they hedge, walk away. Public liability is not the same as goods-in-transit insurance — the first covers them if they damage your property, the second covers your stuff.',
        ],
      },
      {
        heading: '2. "What\'s included in the hourly rate?"',
        paragraphs: [
          'Trolleys, blankets, straps, fuel, GST — should all be included. If they say "blankets are extra $20 each" you\'re looking at a bad deal in disguise.',
        ],
      },
      {
        heading: '3. "Can I see recent Google reviews?"',
        paragraphs: [
          'Not the homepage testimonials — those are curated. Real Google reviews show the picture. Look for the 3-star ones too — companies with no negative reviews are usually too small or the reviews are fake.',
        ],
      },
      {
        heading: '4. "Are these your employees or subcontractors?"',
        paragraphs: [
          'Employees are trained and accountable. Subcontractors are often a roll of the dice. If they subcontract, ask how they vet the crews.',
        ],
      },
      {
        heading: '5. "What\'s the minimum charge?"',
        paragraphs: [
          'Most reputable companies have a 2-hour minimum. That\'s fair. Anything over 4 hours minimum on a small job is a red flag — they\'re hoping for time inflation.',
        ],
      },
      {
        heading: '6. "What happens if you damage something?"',
        paragraphs: [
          'A confident answer ("we file a claim with our insurer, we replace or pay out within 14 days") is what you want. A vague answer means they don\'t handle it well. Bonus question: ask how many damage claims they had last year. Good companies will tell you because the number is low.',
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
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
          'Move your own car off the driveway. Tell us about narrow streets, low-hanging branches, dodgy gates. If your new place is in a unit complex, book the lift if your building requires it (most do for moves over a couple of hours).',
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
      'Hourly rates tell you almost nothing. Here\'s what actually drives the cost of a move in QLD — and how to compare quotes properly.',
    date: '2025-09-05',
    readTime: '5 min',
    category: 'Cost & Pricing',
    author: 'The EzzyGo crew',
    body: [
      {
        paragraphs: [
          'Removalists love to advertise an hourly rate. It\'s a great marketing number because it sounds small and it commits to nothing — the rate tells you the price per hour, not how many hours the job will take. Two companies can quote the same rate and land hundreds of dollars apart on the same house.',
          'That\'s why we quote a fixed price for the whole job instead. But whoever you end up using, it helps to know what actually moves the number. Here\'s the honest version.',
        ],
      },
      {
        heading: 'How long the job really takes',
        paragraphs: [
          'This is the biggest factor by a mile, and it\'s the one hourly quotes leave up to chance. As a rough guide from our own jobs: a studio or 1-bedroom is usually 2-3 hours with 2 movers. A 2-bedroom is around 4 hours. A 3-bedroom runs 5-7 hours and we\'d almost always put 3 movers on it — the bigger crew finishes enough faster that it works out better for the customer, not worse. A 4-5 bedroom family home is a full day, 7-9 hours with 3-4 movers.',
          'Those are ranges, not promises. A packed 2-bedroom with a garage full of tools takes longer than a sparse 3-bedroom.',
        ],
      },
      {
        heading: 'Access at both ends',
        paragraphs: [
          'Stairs, no lift, long carries from the truck to the door, tight driveways, restricted street parking — each of these slows a job down noticeably, and access at the new place matters just as much as the old one. This is the single most common thing people forget to mention when getting quotes, and it\'s the most common reason a cheap quote turns into an expensive invoice.',
        ],
      },
      {
        heading: 'How much there actually is',
        paragraphs: [
          'Bedroom count is a proxy, not a measurement. What matters is volume: how full the wardrobes are, whether the garage is coming, how many boxes you\'ve got. Give whoever\'s quoting you an honest picture and you\'ll get an honest number.',
        ],
      },
      {
        heading: 'Distance and the route',
        paragraphs: [
          'Pickup to drop-off, plus how far the crew travels to reach you. Crossing between Brisbane and the Gold Coast or Sunshine Coast adds drive time — and the time of day matters, because the M1 on a Friday afternoon is a different road to the M1 on a Tuesday morning.',
        ],
      },
      {
        heading: 'Timing',
        paragraphs: [
          'End of month, weekends and school holidays are the busiest windows in Queensland removals. If your dates are flexible, a mid-week move mid-month is the easiest job to book and usually the smoothest one to run.',
        ],
      },
      {
        heading: 'Specialty items',
        paragraphs: [
          'Pianos, pool tables, safes, gym equipment and anything needing disassembly need extra crew or specific gear. None of these are a problem — but they need to be mentioned before the day, not discovered on it.',
        ],
      },
      {
        heading: 'What shouldn\'t be a separate line item',
        paragraphs: [
          'Some companies quote low and bolt these on afterwards. If any of them aren\'t already in the number you\'ve been given, you\'re not comparing like with like:',
        ],
        list: [
          'GST — must be included in the quoted figure',
          'Insurance — basic goods-in-transit cover should be standard',
          'Trolleys, blankets, straps and basic wrapping',
          'Travel time between the two properties',
          'Fuel',
        ],
      },
      {
        heading: 'How to compare quotes properly',
        paragraphs: [
          'Ask every company for a fixed price for your specific job, not a rate. Tell all of them the same details — size, both addresses, stairs, parking, date, anything unusual. If one won\'t give you a fixed number, that\'s useful information about how the invoice is likely to look.',
          'Our quotes are free, take a couple of minutes, and there\'s no obligation to book. Whatever we quote is what you pay.',
        ],
      },
    ],
  },
  {
    slug: 'packing-fragile-items-properly',
    title: 'How to pack fragile items so nothing breaks',
    excerpt:
      'Twenty minutes of proper packing saves a box of broken glassware. Here\'s how the pros do it.',
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
          'Or — and we say this with bias — have us do the whole pack for you. It takes us about 2 hours what would take you 5, and nothing breaks. Add it to your quote and we\'ll price it in. Up to you.',
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
          'Surfers Paradise and Broadbeach buildings often have strict lift booking rules — usually 48 hours\' notice and a specific 2-hour move-in window. We\'ll handle the coordination but tell us your building when you get a quote so we don\'t arrive at 9am and find the lift booked for noon.',
        ],
      },
      {
        heading: 'How we quote it',
        paragraphs: [
          'A 2-bedroom Brisbane to Gold Coast move is usually a comfortable single day, door to door. We quote the whole run as one fixed price — the M1 drive is built into that number, not added as a surcharge afterwards. Send us both addresses and a rough idea of what\'s coming and we\'ll have a price back to you, usually within the hour.',
        ],
      },
      {
        heading: 'What changes after the move',
        paragraphs: [
          'Your power, gas and internet should be transferred 1-2 weeks ahead. Australia Post will redirect mail for 12 months for a small fee — check their site for current rates. Update your driver\'s license address within 14 days (you can do it online). The Gold Coast doesn\'t have separate council tax but rates are sometimes higher.',
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
        heading: '2. "What\'s included in the quote?"',
        paragraphs: [
          'Trolleys, blankets, straps, fuel, GST — all of it should already be in the number. If any of those turn up as a separate line item later, the quote you compared was never the real price.',
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
        heading: '5. "Is this a fixed price or an estimate?"',
        paragraphs: [
          'This is the question that saves people the most money. An estimate can move on the day; a fixed price can\'t. If it\'s an estimate, ask what specifically would make it go up — and get the answer in writing before you book.',
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

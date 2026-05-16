export type Location = {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  short: string;
  description: string;
  population: string;
  driveFromBrisbane: string;
  suburbs: string[];
  popularRoutes: { from: string; to: string }[];
  whyChoose: string[];
  localTips: string;
  faqs: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'QLD',
    tagline: 'Brisbane\'s most trusted removalists.',
    short: 'Local Brisbane crew that knows every suburb, every traffic shortcut, every highrise loading dock.',
    description:
      'Brisbane is our home base. We move dozens of Brisbane families every week — from inner-city apartments in Fortitude Valley and West End, to suburban homes in The Gap and Chermside, to highrise units across the CBD. Our crews know which streets fit our trucks, which buildings need lift bookings, and which suburbs to allow extra time for.',
    population: '2.6 million',
    driveFromBrisbane: 'Local',
    suburbs: [
      'CBD',
      'Fortitude Valley',
      'West End',
      'Paddington',
      'New Farm',
      'Bulimba',
      'Hawthorne',
      'Toowong',
      'Indooroopilly',
      'Chermside',
      'Carindale',
      'The Gap',
      'Mt Gravatt',
      'Holland Park',
      'Wynnum',
      'Sunnybank',
    ],
    popularRoutes: [
      { from: 'Brisbane CBD', to: 'Gold Coast' },
      { from: 'West End', to: 'Bulimba' },
      { from: 'New Farm', to: 'Sunshine Coast' },
      { from: 'Chermside', to: 'Logan' },
    ],
    whyChoose: [
      'Local Brisbane crews — no contractors',
      'Familiar with every suburb and access rule',
      'Highrise and unit specialists',
      'Same-day bookings often available',
      'Fixed quotes, no hidden Brisbane surcharges',
    ],
    localTips:
      'Brisbane CBD moves often need lift bookings — call your building 48 hours ahead. Story Bridge and Gateway tolls add up on long-distance moves; we factor those into your fixed quote so you don\'t get hit with surprise fees.',
    faqs: [
      {
        q: 'How much does a 2-bedroom move cost in Brisbane?',
        a: 'Most 2-bedroom moves within Brisbane cost $600–$900 — typically 3-4 hours of two movers at $149/hr plus a small travel charge if you\'re going across town.',
      },
      {
        q: 'Do you cover greater Brisbane and the bayside?',
        a: 'Yes — Redcliffe, Wynnum, Cleveland, Forest Lake, Springfield, all sorted. Same hourly rate, just a slightly longer travel buffer.',
      },
      {
        q: 'Can you do same-day moves in Brisbane?',
        a: 'Most days yes — call before 11am and we\'ll usually have a crew available by afternoon. No urgent-booking surcharge.',
      },
    ],
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    state: 'QLD',
    tagline: 'Gold Coast moves done right.',
    short: 'Beach to hinterland and everywhere in between — local crew with no travel charge from Brisbane.',
    description:
      'The Gold Coast is one of our most-booked regions. From beachfront apartments in Surfers and Burleigh to family homes in Robina and Helensvale, we run trucks down the M1 every day. We know the area inside out — including which highrise buildings have impossible parking and which beachside streets need a smaller truck.',
    population: '750,000',
    driveFromBrisbane: '50 min',
    suburbs: [
      'Surfers Paradise',
      'Broadbeach',
      'Burleigh Heads',
      'Mermaid Beach',
      'Palm Beach',
      'Currumbin',
      'Coolangatta',
      'Robina',
      'Varsity Lakes',
      'Helensvale',
      'Southport',
      'Main Beach',
      'Coomera',
      'Pacific Pines',
      'Mudgeeraba',
      'Tallebudgera',
    ],
    popularRoutes: [
      { from: 'Brisbane', to: 'Gold Coast' },
      { from: 'Surfers Paradise', to: 'Robina' },
      { from: 'Broadbeach', to: 'Palm Beach' },
      { from: 'Gold Coast', to: 'Sunshine Coast' },
    ],
    whyChoose: [
      'Daily runs between Brisbane and Gold Coast',
      'Highrise and beachfront specialists',
      'Familiar with every gated community',
      'Same hourly rate as Brisbane local moves',
      'Quick quotes — text us before midday',
    ],
    localTips:
      'Surfers Paradise highrises almost always need lift bookings and dock access — let us know your building name when booking so we can sort logistics. Beach traffic on Saturdays adds 30+ min to coastal routes; we book earlier slots to dodge it.',
    faqs: [
      {
        q: 'Do you charge extra for Gold Coast moves from Brisbane?',
        a: 'Just a small travel surcharge to cover the run down the M1 — usually $50-100 depending on origin. The hourly rate is the same as a local move.',
      },
      {
        q: 'Can you move me into a highrise apartment?',
        a: 'All the time. We coordinate with building management on lift bookings and dock access. Just tell us the building name when booking.',
      },
      {
        q: 'Do you go up to Coolangatta and the border?',
        a: 'Yes — all the way to Tweed Heads and the NSW border. Cross-border moves into Northern NSW also welcome.',
      },
    ],
  },
  {
    slug: 'sunshine-coast',
    name: 'Sunshine Coast',
    state: 'QLD',
    tagline: 'Sunshine Coast moves, hassle-free.',
    short: 'Caloundra to Noosa — friendly local moves with the same care we give Brisbane jobs.',
    description:
      'The Sunshine Coast is growing fast and we move new locals up there every week. Whether you\'re relocating from Brisbane to start a coastal lifestyle or moving between suburbs from Caloundra to Noosa, we\'ll get you there with zero stress. The Bruce Highway run is a daily route for us.',
    population: '350,000',
    driveFromBrisbane: '90 min',
    suburbs: [
      'Maroochydore',
      'Mooloolaba',
      'Caloundra',
      'Noosa Heads',
      'Noosaville',
      'Coolum Beach',
      'Buderim',
      'Sippy Downs',
      'Kawana Waters',
      'Bli Bli',
      'Nambour',
      'Peregian Beach',
      'Twin Waters',
      'Marcoola',
    ],
    popularRoutes: [
      { from: 'Brisbane', to: 'Sunshine Coast' },
      { from: 'Maroochydore', to: 'Noosa' },
      { from: 'Caloundra', to: 'Buderim' },
      { from: 'Sunshine Coast', to: 'Gold Coast' },
    ],
    whyChoose: [
      'Regular Brisbane–Sunny Coast routes',
      'Local crew familiar with coastal suburbs',
      'Beachside and acreage move specialists',
      'No premium for the longer drive',
      'Fixed quotes including Bruce Hwy tolls',
    ],
    localTips:
      'Noosa is famously narrow — some streets in Noosaville and Sunshine Beach don\'t fit a big truck. We use a 6-tonne for these jobs by default. Always tell us if you\'re in a complex with shared driveways.',
    faqs: [
      {
        q: 'How long does a Brisbane to Sunshine Coast move take?',
        a: 'Door-to-door usually 5-7 hours including drive time. A 2-bedroom typically costs $1,000-$1,400 all in.',
      },
      {
        q: 'Do you cover all the way to Noosa?',
        a: 'Yes — Noosa Heads, Noosaville, Tewantin, even up to Cooroy and Pomona. Same rates as Caloundra runs.',
      },
      {
        q: 'Can you handle acreage and farm moves?',
        a: 'Absolutely — we\'ve done plenty of moves to and from hinterland properties. Just give us a heads up about access and we\'ll plan the truck size.',
      },
    ],
  },
  {
    slug: 'ipswich',
    name: 'Ipswich',
    state: 'QLD',
    tagline: 'Ipswich removals at honest prices.',
    short: 'Local Ipswich crew. No Brisbane surcharge. Same-day jobs often available.',
    description:
      'Ipswich is a growing region and we move plenty of families there every week. Whether you\'re relocating from Brisbane to a bigger family home, or moving across town from Goodna to Springfield, we treat your move with the same care we\'d give a CBD highrise — only without the city traffic.',
    population: '230,000',
    driveFromBrisbane: '40 min',
    suburbs: [
      'Ipswich CBD',
      'Goodna',
      'Springfield',
      'Springfield Lakes',
      'Redbank',
      'Redbank Plains',
      'Booval',
      'Bundamba',
      'Riverview',
      'Brassall',
      'North Ipswich',
      'Yamanto',
      'Ripley',
      'Karalee',
    ],
    popularRoutes: [
      { from: 'Brisbane', to: 'Ipswich' },
      { from: 'Goodna', to: 'Springfield' },
      { from: 'Ipswich', to: 'Toowoomba' },
      { from: 'Brisbane CBD', to: 'Springfield Lakes' },
    ],
    whyChoose: [
      'Daily runs Brisbane ↔ Ipswich',
      'No metro surcharge',
      'Acreage and family home specialists',
      'Same-day bookings most days',
      'Family-friendly crews',
    ],
    localTips:
      'Springfield and Ripley are full of new estates with tight access roads — we use mid-sized trucks for these by default. Some Ipswich heritage homes have very narrow staircases; tell us if you have a big sofa or piano so we plan ahead.',
    faqs: [
      {
        q: 'Is there a surcharge to move to Ipswich from Brisbane?',
        a: 'Minimal — just a small travel charge to cover the drive. Most Brisbane-to-Ipswich moves are still well under $1,000 for a 2-bedroom.',
      },
      {
        q: 'Do you cover Springfield and the new estates?',
        a: 'Yes, all of Springfield Central, Springfield Lakes, Springfield Rise, Spring Mountain, Greater Springfield. Same hourly rate.',
      },
      {
        q: 'Can you handle the move to a brand new house in Ripley?',
        a: 'All the time. We work around handover dates and can do same-day or next-day if your build is on schedule.',
      },
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    state: 'QLD',
    tagline: 'Logan moves done with care.',
    short: 'Springwood to Beenleigh, Shailer Park to Slacks Creek — we know Logan like locals do.',
    description:
      'Logan is one of the fastest-growing parts of South East QLD and we move families in and around the area every week. From Springwood townhouses to Beenleigh family homes to acreage properties out past Park Ridge — our crews know the back streets, the suburbs, and the timing tricks to get your move done quick.',
    population: '350,000',
    driveFromBrisbane: '35 min',
    suburbs: [
      'Springwood',
      'Shailer Park',
      'Slacks Creek',
      'Beenleigh',
      'Loganholme',
      'Loganlea',
      'Marsden',
      'Park Ridge',
      'Crestmead',
      'Browns Plains',
      'Underwood',
      'Daisy Hill',
      'Rochedale South',
      'Mt Warren Park',
      'Yarrabilba',
    ],
    popularRoutes: [
      { from: 'Brisbane', to: 'Logan' },
      { from: 'Springwood', to: 'Beenleigh' },
      { from: 'Logan', to: 'Gold Coast' },
      { from: 'Park Ridge', to: 'Browns Plains' },
    ],
    whyChoose: [
      'Local Logan knowledge',
      'No travel premium from Brisbane',
      'Acreage and family home specialists',
      'Same-day jobs welcome',
      'Crews that work fast without being rough',
    ],
    localTips:
      'Acreage moves in Park Ridge, Yarrabilba and Greenbank often need a longer truck driveway approach — let us know the access and we\'ll bring the right size. Logan-to-Gold Coast moves are quick wins for us, often under 4 hours start to finish.',
    faqs: [
      {
        q: 'How much for a Logan to Gold Coast move?',
        a: 'Usually $600-$900 for a 2-bedroom — most of these are under 4 hours door-to-door.',
      },
      {
        q: 'Do you cover all of Logan?',
        a: 'Yes — Springwood, Shailer Park, Beenleigh, Loganholme, Browns Plains, Park Ridge, Yarrabilba and everywhere between.',
      },
      {
        q: 'Can you move from Brisbane to Logan same day?',
        a: 'Most days yes. Call before noon and we\'ll usually have a crew free same day.',
      },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
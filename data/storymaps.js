// StoryMaps pages: https://github.com/siwill22/StoryMaps
// Only southeast-tasmania is on `main`, which is what Pages serves. The two
// zircon pages sit on a working branch and 404, which `live: false` records.

const SM = 'https://siwill22.github.io/StoryMaps/';

export default [
  {
    slug: 'zircons',
    title: 'Igneous zircons',
    tagline: '14,000 dated crystals, back where they crystallised.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'zircons/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'zircons.jpg',
    summary: [
      'Mafic and felsic igneous zircons from Puetz et al. 2026, 0–1000 Ma at 1 Myr steps. A sample is drawn from its crystallisation age all the way to the present, bright for the first 5 Myr and faint after, so the map accumulates as you scrub.',
    ],
    contents: [
      ['Samples', 'Coloured by rock type. 14,167 of 24,519 fall in range.'],
      ['Bright and faint', 'Age drives colour, not visibility. A zircon does not stop existing.'],
      ['Boundaries', 'Reconstructed ridges, trenches and transforms, out to 1000 Ma.'],
      ['Histogram', 'The compilation\'s age distribution.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub or press play.',
      'Hover a sample for detail, click to pin.',
    ],
    lessons: [
      {
        title: 'The peaks in the zircon record',
        level: 'Undergraduate',
        duration: '90 min',
        steps: [
          'Find the three strongest peaks in the histogram.',
          'Set the time to each and describe where the bright samples concentrate.',
          'Check whether those sit on convergent margins, orogens, or neither.',
          'Do the same for a trough.',
        ],
        ask: 'Are the peaks magma production, or what survived to be sampled?',
      },
      {
        title: 'Why zircon',
        level: 'Senior secondary',
        duration: '30 min',
        steps: [
          'Start at 1000 Ma and scrub forward. Watch the faint archive build.',
          'Point out that every faint dot is a crystal that still exists.',
          'Contrast with detrital zircons, where samples vanish outside their window.',
        ],
        ask: 'What would this map look like for a mineral that weathers easily?',
      },
    ],
  },
  {
    slug: 'detrital-zircons',
    title: 'Detrital zircons',
    tagline: 'One pie per sample, each wedge a story about where the sand came from.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'detrital-zircons/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'detrital-zircons.jpg',
    summary: [
      'Samples drawn as pie charts, not symbols: wedge size is the share of grains at a given lag time, wedge colour is the lag bin. Short lag means an active arc nearby; long lag means an old craton. Built from ~987,000 grain ages across 19,564 samples.',
      'A sample shows only within 5 Myr of deposition, then goes. The page is about when a rock was laid down.',
    ],
    contents: [
      ['Pies', 'Wedges by lag-time bin, sized by share of grains.'],
      ['Lifespan', 'Visible within 5 Myr of deposition, then gone.'],
      ['Boundaries', 'Reconstructed ridges, trenches and transforms, 0–1000 Ma.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub or press play.',
      'Hover a pie for the sample detail, click to pin.',
    ],
    lessons: [
      {
        title: 'Convergent, collisional or extensional?',
        level: 'Undergraduate',
        duration: '90 min',
        steps: [
          'Find a sample dominated by short-lag wedges. Describe the tectonic setting around it.',
          'Find one dominated by long lags. Same again.',
          'Find a mixed one and argue for a setting.',
          'Check each against what the reconstruction shows.',
        ],
        ask: 'What kind of basin would break this rule?',
      },
      {
        title: 'Where did this sand come from?',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Read the pie for a sample near a mountain belt.',
          'Read one on a passive margin far from mountains.',
          'Describe the difference without using the words "lag time".',
        ],
        ask: 'If you dated the sand on your nearest beach, what would the pie look like?',
      },
    ],
  },
  {
    slug: 'southeast-tasmania',
    title: 'Southeast Tasmania',
    tagline: 'Gondwana to dolerite, at Port Arthur and Eaglehawk Neck.',
    collection: 'Story maps',
    kind: 'Scroll-driven story',
    url: SM + 'southeast-tasmania/',
    live: true,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'southeast-tasmania.jpg',
    summary: [
      'A scrolling story from Tasmania\'s near-polar position in Permian Gondwana to the Jurassic dolerite that forms the cliffs at Eaglehawk Neck. The only one here with a field area attached: the rocks in the closing scenes are ones a class can stand on.',
    ],
    contents: [
      ['Gondwana', 'A high-latitude Permian setting, close to the pole.'],
      ['Permian–Triassic', 'The sedimentary record and its fossils.'],
      ['Dolerite', 'Jurassic magmatic plumbing.'],
      ['Dykes and sills', 'Fractures, transgressive flow, bedding-plane propagation.'],
      ['Field area', 'Port Arthur and Eaglehawk Neck.'],
    ],
    controls: ['Scroll to advance the story.'],
    lessons: [
      {
        title: 'Field trip briefing',
        level: 'Undergraduate',
        duration: '60 min',
        steps: [
          'Work through the story, building a stratigraphic column as you go.',
          'Per unit, write one field observation that would confirm it.',
          'Mark the dolerite contacts on a peninsula map before going.',
        ],
        ask: 'Which of these claims could you test at the outcrop, and which need a lab?',
      },
      {
        title: 'Cold Tasmania',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Note Tasmania\'s Permian latitude from the reconstruction.',
          'List the sedimentary features that would indicate a cold, high-latitude setting.',
          'Compare with the modern latitude and climate.',
        ],
        ask: 'How far has Tasmania moved, and which way?',
      },
      {
        title: 'Why the cliffs are vertical',
        level: 'Outreach',
        duration: '10 min',
        steps: [
          'Show the reconstruction at the time of intrusion.',
          'Explain cooling contraction and the crack pattern it makes.',
          'Point out the same rock in the Hobart skyline.',
        ],
        ask: 'Why hexagons, and not squares?',
      },
    ],
  },
];

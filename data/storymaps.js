// StoryMaps pages: https://github.com/siwill22/StoryMaps
// Only southeast-tasmania is on `main`, which is what Pages serves. The rest
// sit on a working branch and 404, which is what `live: false` records.

const SM = 'https://siwill22.github.io/StoryMaps/';

export default [
  {
    slug: 'plate-boundaries',
    title: 'Plate boundaries',
    tagline: 'Every ridge, trench and transform, a million years at a time.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'plate-boundaries/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'plate-boundaries.jpg',
    summary: [
      'Boundaries resolved from Müller et al. 2019 at every step from 250 Ma, 251 frames at 1 Myr. Frames cut hard rather than interpolate: a boundary network is a topology, and smoothing between two frames invents geometry the model does not have.',
    ],
    contents: [
      ['Boundary types', 'Ridge, transform, subduction, each toggleable.'],
      ['Polarity', 'Triangles on the overriding side.'],
      ['Velocities', 'Arrows with a scale bar pinned to a round speed.'],
      ['Deposits', 'Base metals within a window around their age.'],
      ['Length curve', 'Boundary length on the scrubber\'s own axis.'],
      ['Deep links', '#lon,lat,zoom,time pins the view.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub or press play. 250 Ma left, 0 Ma right.',
      'Hover a deposit for detail, click to pin. Rest on a cluster and it fans apart.',
    ],
    lessons: [
      {
        title: 'The Ring of Fire has not always been a ring',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'At 0 Ma, trace the Pacific subduction zones and note each polarity.',
          'Step back in 50 Myr intervals. Mark every appearance, disappearance and flip.',
          'Name the oldest continuously subducting margin in the model.',
        ],
        ask: 'What has to be true of a margin for subduction to run there for 200 Myr?',
      },
      {
        title: 'Deposits sit where a boundary used to be',
        level: 'Undergraduate',
        duration: '90 min',
        steps: [
          'Pick a porphyry deposit. Read its age.',
          'Set the slider there and describe the boundary configuration above it.',
          'Repeat for four deposits and tabulate setting against type.',
          'Find one whose present-day setting would have misled you.',
        ],
        ask: 'Which deposit types are diagnostic of a setting, and which are not?',
      },
      {
        title: 'Read the length curve',
        level: 'Undergraduate',
        duration: '30 min',
        steps: [
          'Find the maximum and minimum. Note the ages.',
          'Look at the map at each and say what differs.',
        ],
        ask: 'Does more boundary length mean faster plates, more plates, or neither?',
      },
    ],
  },
  {
    slug: 'lips',
    title: 'Fire, ice and extinction',
    tagline: 'Flood basalts against glaciation and extinction, 0–540 Ma.',
    collection: 'Story maps',
    kind: 'Scroll-driven story',
    url: SM + 'lips/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'lips.jpg',
    summary: [
      'Large igneous provinces on a rotating globe, scrolled through the Phanerozoic against ice extent and marine extinction rates. Each scene sets a time and a camera; the camera aims at where a province was when it erupted, not where its remnants sit now.',
      'The scrubber and legend stay live throughout, so a reader can stop following the argument and go poking at any point.',
    ],
    contents: [
      ['LIPs', 'Reconstructed provinces, spotlit at eruption age.'],
      ['Ice', 'Glaciation curve and banded glacial intervals.'],
      ['Extinction', 'PBDB rates on the same axis.'],
      ['Flux', 'Province area through time.'],
      ['Projections', 'Orthographic globe or Robinson.'],
    ],
    controls: [
      'Scroll to advance the story and the reconstruction.',
      'Drag to rotate. Ctrl/⌘ and wheel to zoom, since a bare wheel scrolls.',
    ],
    lessons: [
      {
        title: 'Does every flood basalt cause an extinction?',
        level: 'Undergraduate',
        duration: '90 min',
        steps: [
          'List the five largest events on the flux curve.',
          'For each, check whether an extinction peak coincides, and how closely.',
          'Now go the other way: largest extinctions first.',
          'Sort every event into LIP with extinction, LIP without, extinction without LIP.',
        ],
        ask: 'Dating uncertainty here runs to millions of years. What does that do to a causal claim?',
      },
      {
        title: 'Fire and ice together',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Scroll through and note each glacial interval.',
          'Note whether a large eruption sits just before, during or after.',
          'Write one sentence per pairing on which way causation could run.',
        ],
        ask: 'Aerosols cool for years, CO₂ warms for millennia. Which does a rock record see?',
      },
      {
        title: 'The end-Permian, one scene',
        level: 'Outreach',
        duration: '15 min',
        steps: [
          'Scroll to the Siberian Traps and let the globe settle.',
          'Show where the eruption was then, against where Siberia is now.',
          'Bring up the extinction curve at the same moment.',
        ],
        ask: 'Nine in ten marine species went. How long until anything came back?',
      },
    ],
  },
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
      ['Boundaries', 'The same reconstructed network, out to 1000 Ma.'],
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
      ['Boundaries', 'The same reconstructed network, 0–1000 Ma.'],
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

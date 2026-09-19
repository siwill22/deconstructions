// The StoryMaps pages: https://github.com/siwill22/StoryMaps
//
// Three of these (plate-boundaries, zircons, detrital-zircons) are one family
// sharing a globe, a clock and a legend; lips and southeast-tasmania are
// scroll-driven narratives.
//
// Only southeast-tasmania is on StoryMaps' `main`, which is what its Pages
// site serves. The rest live on a working branch and so return 404, which is
// what `live: false` records.

const SM = 'https://siwill22.github.io/StoryMaps/';

export default [
  {
    slug: 'plate-boundaries',
    title: 'Reconstructed plate boundaries',
    tagline: 'Every ridge, trench and transform, redrawn a million years at a time.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'plate-boundaries/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'plate-boundaries.jpg',
    summary: [
      'Plate boundaries resolved from the Müller et al. (2019) topologies at every step from 250 Ma to the present, 251 frames at 1 Myr spacing, drawn as vector lines on a rotatable globe. Subduction zones carry the standard triangle decoration on the overriding-plate side, so polarity is readable at a glance.',
      'Frames cut hard rather than interpolating. A plate boundary network is a topology: boundaries appear, vanish and change type between frames, and smoothing between two of them would invent geometry that the model does not contain.',
      'A chart above the time slider tracks total boundary length through time on the same axis, so the map and the summary statistic move together.',
    ],
    contents: [
      ['Boundary types', 'Ridges, transforms and subduction zones, each toggleable from the legend.'],
      ['Subduction polarity', 'Triangles on the overriding side, so which plate goes under is never ambiguous.'],
      ['Velocity arrows', 'Plate motion vectors with a scale bar pinned to a round speed and resized as you zoom.'],
      ['Mineral deposits', 'Base metal deposits shown within a window around their age; hover for detail, click to pin.'],
      ['Boundary length through time', 'A chart on the same axis as the scrubber. Hover to read, click or drag to seek.'],
      ['Deep links', '#lon,lat,zoom,time in the URL pins the view, which makes reproducible screenshots easy to set as homework.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub the slider or press ▶. The axis runs 250 Ma on the left to 0 Ma on the right.',
      'Click legend rows to toggle boundary types, velocity arrows or deposits.',
      'Hover a deposit for detail, click to pin; rest on a cluster and it fans apart.',
    ],
    lessons: [
      {
        title: 'The Ring of Fire has not always been a ring',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Students trace the Pacific subduction system backwards and find out which parts are ancient and which are young.',
        steps: [
          'At 0 Ma, trace the subduction zones around the Pacific and note the polarity of each segment.',
          'Step back in 50 Myr intervals, marking each time a segment appears, disappears or flips.',
          'Identify the oldest continuously subducting margin in the model.',
        ],
        discussion: [
          'What has to be true of a margin for subduction to run there for 200 Myr?',
          'What happens to the plate on the other side while that goes on?',
        ],
      },
      {
        title: 'Deposits sit where a boundary used to be',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'Base metal deposits appear in the window around their age. Set the clock to that age and the tectonic setting they formed in is on the screen.',
        steps: [
          'Pick a porphyry deposit and read its age from the popup.',
          'Set the time slider to that age and describe the boundary configuration above it.',
          'Repeat for four deposits of different ages and types, and tabulate setting against deposit type.',
          'Find a deposit whose present-day setting would have led you to the wrong conclusion.',
        ],
        discussion: [
          'Which deposit types are diagnostic of a setting, and which are not?',
          'How would an exploration team use a map like this, and where would it mislead them?',
        ],
      },
      {
        title: 'Read the length curve',
        level: 'Undergraduate',
        duration: '30 min',
        body: 'Total boundary length is a single number summarising a whole planet. Ask what it can and cannot tell you.',
        steps: [
          'Find the maximum and minimum of the boundary length curve and note the times.',
          'Look at the map at each of those times and describe what is different.',
          'Consider whether the curve would look the same under a different plate model.',
        ],
        discussion: ['Does more boundary length mean faster plate motion, more plates, or neither?'],
      },
    ],
  },
  {
    slug: 'lips',
    title: 'Fire, ice and extinction',
    tagline: 'Flood basalts against the glaciation record and the extinction record, 0–540 Ma.',
    collection: 'Story maps',
    kind: 'Scroll-driven story',
    url: SM + 'lips/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'lips.jpg',
    summary: [
      'Large igneous provinces reconstructed on a rotating globe, scrolled through the Phanerozoic against ice extent and marine extinction rates. Scrolling advances the reconstruction: each scene carries a target time, a camera and usually a province to spotlight, and the globe eases there over the first part of the scene and then holds while you read.',
      'The camera aim for a named province comes from the reconstruction rather than the scene, so a province is found where it was when it erupted rather than where its remnants sit today.',
      'The scrubber and every legend control stay live throughout, and the last scene releases the controls entirely. A reader who wants to stop following the argument and go poking can do so at any point, which makes the page work both as a lecture and as a sandbox.',
    ],
    contents: [
      ['LIP polygons', 'Reconstructed flood basalt provinces, spotlit at their eruption time.'],
      ['Ice extent', 'A glaciation curve and banded glacial intervals through the Phanerozoic.'],
      ['Marine extinction rates', 'Extinction rates from the Paleobiology Database, drawn on the same time axis.'],
      ['LIP eruptive flux', 'Province area through time, so the size of an event is on the chart, not just its name.'],
      ['Scroll narrative', 'Scenes that set the time and the camera, with a live clock reading out the coupling.'],
      ['Projections', 'Orthographic globe or Robinson whole-world map, switched top right.'],
    ],
    controls: [
      'Scroll to advance the story and the reconstruction.',
      'Drag to rotate. Ctrl/⌘ + wheel (or pinch) to zoom, since a bare wheel scrolls the story.',
      'The button top right switches globe / Robinson.',
      'Legend rows and the scrubber stay live at every point in the story.',
    ],
    lessons: [
      {
        title: 'Does every flood basalt cause an extinction?',
        level: 'Undergraduate',
        duration: '90 min seminar',
        body: 'The correlation is famous and the exceptions are the interesting part. The page puts the flux curve and the extinction curve on the same axis so students can check each event individually.',
        steps: [
          'List the five largest events on the LIP flux curve.',
          'For each, check whether an extinction peak coincides, and how closely.',
          'List the largest extinction peaks and check whether a LIP coincides with each.',
          'Classify every event into: LIP with extinction, LIP without, extinction without LIP.',
        ],
        discussion: [
          'What would make one eruption lethal and another not: volume, rate, latitude, what it erupted through?',
          'The dating uncertainty on some of these is millions of years. What does that do to a claim of causation?',
        ],
      },
      {
        title: 'Fire and ice in the same picture',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Volcanism warms the planet on long timescales and cools it on short ones. The glaciation bands let students test which effect shows up in the record.',
        steps: [
          'Scroll through the story and note each glacial interval.',
          'Note whether a large eruption sits just before, during or after each one.',
          'Write one sentence for each pairing about which way the causation could run.',
        ],
        discussion: [
          'Sulphate aerosols cool for years; CO₂ warms for hundreds of thousands. Which one would a rock record see?',
        ],
      },
      {
        title: 'The end-Permian, scene by scene',
        level: 'Outreach',
        duration: '15 min',
        body: 'Use the Siberian Traps scene as a self-contained story with a beginning, a middle and a very bad end.',
        steps: [
          'Scroll to the Siberian Traps scene and let the globe settle.',
          'Point out the eruption\'s position at the time versus where Siberia is now.',
          'Bring up the extinction curve at the same moment.',
        ],
        discussion: ['Nine in ten marine species went. What came back, and how long did it take?'],
      },
    ],
  },
  {
    slug: 'zircons',
    title: 'Igneous zircons through time',
    tagline: '14,000 dated crystals, each put back where it crystallised.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'zircons/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'zircons.jpg',
    summary: [
      'Mafic and felsic igneous zircon samples from the Puetz et al. (2026) compilation, reconstructed on a rotatable globe over the same boundaries, continents and velocity arrows as the plate-boundaries page. The series runs 0–1000 Ma at 1 Myr steps, the full span the Merdith et al. (2021) topologies support.',
      'A sample is drawn from its crystallisation age all the way to the present, bright within 5 Myr of that age and faint outside it. A zircon does not stop existing once it has formed, so the age window drives colour rather than visibility, and the page accumulates a visible record of everything crystallised so far.',
      'Of 24,519 samples in the compilation, the 14,167 with a crystallisation age of 1000 Ma or younger appear here.',
    ],
    contents: [
      ['Igneous zircon samples', 'Mafic and felsic, coloured by rock type, from Puetz et al. (2026).'],
      ['Bright / faint by age', 'Bright within 5 Myr of crystallisation, faint thereafter, so the archive builds up as you scrub.'],
      ['Plate boundaries and velocities', 'The same reconstructed boundary network as the plate-boundaries page, out to 1000 Ma.'],
      ['Zircon age histogram', 'The compilation\'s age distribution as a chart beneath the map.'],
      ['Hover and pin', 'Hover a sample for its detail, click to pin the popup.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub the slider or press ▶.',
      'Click legend rows to toggle boundary types, velocity arrows or rock type.',
      '#lon,lat,zoom,time in the URL pins the view.',
    ],
    lessons: [
      {
        title: 'The peaks in the zircon record',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'The global zircon age distribution is famously peaky. Students find the peaks on the histogram, then go to the map at those times to see where the crystals actually were.',
        steps: [
          'Identify the three strongest peaks in the zircon age histogram.',
          'Set the time to each peak and describe where the bright samples are concentrated.',
          'Check whether those concentrations sit on a convergent margin, an orogen, or neither.',
          'Do the same for a trough between peaks.',
        ],
        discussion: [
          'Are the peaks telling you about magma production, or about what survives to be sampled?',
          'Supercontinent assembly is the usual explanation. What would falsify it?',
        ],
      },
      {
        title: 'Why zircon?',
        level: 'Senior secondary',
        duration: '30 min',
        body: 'A short introduction to why one mineral carries so much of the deep-time record: it takes up uranium, rejects lead, and survives almost everything.',
        steps: [
          'Show the map at 1000 Ma and scrub forward, watching the faint archive accumulate.',
          'Point out that every faint dot is a crystal that still exists today.',
          'Contrast with the detrital-zircons page, where samples vanish outside their window.',
        ],
        discussion: ['What would the map look like for a mineral that weathers easily?'],
      },
    ],
  },
  {
    slug: 'detrital-zircons',
    title: 'Detrital zircons through time',
    tagline: 'Each sample a pie chart, each wedge a story about where the sand came from.',
    collection: 'Story maps',
    kind: 'Interactive map',
    url: SM + 'detrital-zircons/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'detrital-zircons.jpg',
    summary: [
      'Detrital zircon samples reconstructed to their depositional position and drawn as pie charts rather than single symbols. Wedge size is the share of that sample\'s dated grains at a given lag time (grain crystallisation age minus depositional age), and wedge colour is the lag bin.',
      'Lag time is the provenance signal. A sample full of grains barely older than the sediment was shed off an active magmatic arc nearby; a sample of grains a billion years older was shed off an old craton. One glance at a pie tells you which.',
      'Built from ~987,000 individual U–Pb grain ages across 19,564 samples in the Puetz et al. (2026) compilation, collapsed to one pie per sample. A sample is drawn only within 5 Myr of its depositional age and then disappears. The page is about when a rock was deposited, not that it still exists.',
      'The lag-time approach follows Jian et al. (2022), building on Cawood et al. (2012).',
    ],
    contents: [
      ['Pie glyph per sample', 'Wedges by lag-time bin, sized by the share of grains in that bin.'],
      ['Depositional lifespan', 'Samples appear within 5 Myr of deposition and then vanish.'],
      ['Plate boundaries and velocities', 'The same reconstructed network, 0–1000 Ma.'],
      ['Hover and pin', 'Hover a pie for the sample detail, click to pin.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Scrub the slider or press ▶.',
      'Click legend rows to toggle boundaries, velocity or the sample layer.',
      '#lon,lat,zoom,time in the URL pins the view.',
    ],
    lessons: [
      {
        title: 'Convergent, collisional or extensional?',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'The classic Cawood-style provenance discrimination, done by eye on the map instead of on a cumulative-distribution plot.',
        steps: [
          'Find a sample dominated by short-lag wedges and describe the tectonic setting on the map around it.',
          'Find one dominated by long-lag wedges and do the same.',
          'Find a mixed one and argue for a setting.',
          'Compare your classifications with what the reconstruction shows at that time and place.',
        ],
        discussion: [
          'How confidently can a setting be read off a lag-time distribution alone?',
          'What kinds of basin would break this rule?',
        ],
      },
      {
        title: 'Where did this sand come from?',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'The simplest possible version: a grain of sand is older than the rock it sits in, and the gap tells you how far it travelled and from what.',
        steps: [
          'Pick a sample near a mountain belt and read its pie.',
          'Pick one on a passive margin far from any mountains and read its pie.',
          'Describe the difference in one sentence without using the words "lag time".',
        ],
        discussion: ['If you dated the sand on your nearest beach, what would the pie look like?'],
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
      'A scroll-driven story map in the same visual style as the gateways prototype, narrowed to the geology of southeast Tasmania. It runs from Tasmania\'s high-latitude position in southern Gondwana, through the Permian–Triassic sedimentary record, to the Jurassic dolerite that now forms the cliffs at Eaglehawk Neck.',
      'Of everything in this collection it is the one with a field area attached. The rocks in the closing scenes are ones a class can stand on, which makes it the natural bridge between a global reconstruction and an afternoon with a hand lens.',
    ],
    contents: [
      ['Tasmania in southern Gondwana', 'A high-latitude setting in the Permian, close to the pole.'],
      ['Permian–Triassic sediments', 'The sedimentary record and its fossil assemblages.'],
      ['Jurassic dolerite', 'Mesozoic magmatic plumbing in southeast Tasmania.'],
      ['Dykes and sills', 'Fractures, transgressive flow and bedding-plane propagation.'],
      ['Regional comparison', 'The Mount Wellington / kunanyi dolerite for context.'],
      ['Port Arthur and Eaglehawk Neck', 'A modern field area for reading the ancient geology.'],
    ],
    controls: [
      'Scroll to advance the story.',
      'Reconstruction panels and geology photography alternate as you go.',
    ],
    lessons: [
      {
        title: 'Field trip preparation',
        level: 'Undergraduate',
        duration: '60 min pre-trip briefing',
        body: 'Run the story before a Tasman Peninsula field day so students arrive knowing what the outcrop is evidence of.',
        steps: [
          'Work through the story, building a stratigraphic column as you go.',
          'For each unit, write down one observation you could make in the field to confirm it.',
          'Mark the dolerite contacts on a map of the peninsula before going.',
        ],
        discussion: [
          'Which of these claims could you test at the outcrop, and which need a lab?',
          'What would falsify the sill interpretation?',
        ],
      },
      {
        title: 'Cold Tasmania',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Permian Tasmania was near-polar. The sedimentary record says so, and the reconstruction says why.',
        steps: [
          'Note Tasmania\'s Permian latitude from the reconstruction scene.',
          'List the sedimentary features that would indicate a cold, high-latitude setting.',
          'Compare with the modern latitude and the modern climate.',
        ],
        discussion: ['How far has Tasmania moved, and in which direction?'],
      },
      {
        title: 'Why the cliffs are vertical',
        level: 'Outreach',
        duration: '10 min on site',
        body: 'The columnar dolerite at Eaglehawk Neck explained in three minutes, for anyone standing in front of it.',
        steps: [
          'Show the reconstruction at the time of intrusion.',
          'Explain cooling contraction and the hexagonal crack pattern it produces.',
          'Point out the same rock in the skyline of Hobart.',
        ],
        discussion: ['Why hexagons and not squares?'],
      },
    ],
  },
];

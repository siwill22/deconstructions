// Two viewers about the history of measurement rather than the history of the
// Earth: where the ships went, and what they recorded on the way.
//
// Neither is a Geode or StoryMaps page. marine-survey-globe is its own repo
// with its own Pages deployment; HistMag is a single local HTML file with no
// repository yet.

export default [
  {
    slug: 'marine-survey',
    title: 'Marine survey globe',
    tagline: 'Forty years of ships criss-crossing the ocean, drawn one year at a time.',
    collection: 'Survey history',
    kind: 'Globe viewer',
    url: 'https://siwill22.github.io/marine-survey-globe/',
    live: true,
    repo: 'https://github.com/siwill22/marine-survey-globe',
    thumb: 'marine-survey.jpg',
    summary: [
      'Marine magnetic and gravity survey coverage accumulating from 1960 to 2002, drawn on a rotatable globe over a greyscale relief backdrop. Every track is a real research cruise, coloured by the cleaned residual magnetic field it measured, and the counter in the timebar reads out what fraction of the seafloor has been surveyed at that moment.',
      'Watching it run is the quickest way to understand why marine geophysical data looks the way it does. Coverage is not a survey design; it is an accumulation of individual cruises, each funded for its own reasons, and the gaps are where nobody had a reason to go.',
      'A separate Antarctic layer holds an ADMAP2 magnetic grid and a derived age grid in native polar stereographic projection, kept flat rather than reprojected onto the globe.',
    ],
    contents: [
      ['Survey tracks 1960–2002', 'Around 20 million measurements from the Ishihara, Catalan and Quesnel compilation of GEODAS volumes 1–4.'],
      ['Cleaned residual field', 'Track colour is the magnetic residual in nT, on a blue-to-red ramp about zero.'],
      ['Cruise metadata', 'Hover a track for the ship, the institution and, where it could be resolved, the chief scientist.'],
      ['Coverage readout', 'The running percentage of seafloor surveyed, alongside the year.'],
      ['Historical context charts', 'Cumulative coverage, annual track-kilometres plotted against oil prices, and the north/south coverage asymmetry.'],
      ['Antarctic magnetic overlay', 'ADMAP2 values and an AntMagic-derived age grid, in EPSG:3031.'],
      ['Projections', 'Globe or Plate Carrée.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Press ▶ or drag the timebar to move through the years.',
      'Hover a track for its cruise details.',
      'The chart icon opens the historical context charts; the S button switches to the Antarctic layer.',
    ],
    lessons: [
      {
        title: 'Where the data is, and where it is not',
        level: 'Undergraduate',
        duration: '60 min practical',
        body: 'Students map the gaps rather than the coverage, then work out what each gap is made of.',
        steps: [
          'Run the sequence to 2002 and identify the three largest unsurveyed areas of ocean.',
          'For each, propose a reason: remoteness, ice, weather, politics, or nobody asking the question.',
          'Check the north/south asymmetry chart and compare it with where the funding agencies were.',
          'Consider what a global magnetic anomaly grid does with those gaps.',
        ],
        discussion: [
          'Every global grid interpolates across these holes. What does that do to a number read off one?',
          'If you had one ship for one year, where would you send it?',
        ],
      },
      {
        title: 'Survey effort follows the money',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'The context charts plot annual track-kilometres against the oil price. The relationship is not subtle.',
        steps: [
          'Open the charts and describe the shape of the annual survey effort curve.',
          'Overlay the oil price and mark the years where the two move together.',
          'Find a year where they do not, and look up what else was happening.',
        ],
        discussion: [
          'Is scientific data collection driven by scientific questions?',
          'What kind of science gets done in a downturn?',
        ],
      },
      {
        title: 'Stripes on the seafloor',
        level: 'Outreach',
        duration: '10 min at a stand',
        body: 'The blue and red banding along the tracks is the magnetic reversal record, measured one ship at a time.',
        steps: [
          'Zoom to a well-surveyed stretch of the Mid-Atlantic Ridge.',
          'Point out that the colour flips back and forth along a track crossing the ridge.',
          'Explain that each flip is the Earth\'s magnetic field reversing, frozen into the rock as it cooled.',
        ],
        discussion: ['The field has flipped hundreds of times. When is it due again, and would we notice?'],
      },
    ],
  },
  {
    slug: 'histmag',
    title: 'HistMag',
    tagline: 'Ships, compasses and the geomagnetic field, 1500 to 1930.',
    collection: 'Survey history',
    kind: 'Interactive map',
    url: null,
    live: false,
    repo: null,
    thumb: 'histmag.jpg',
    status: 'Work in progress.',
    summary: [
      '180,238 declination, inclination and intensity readings from the HISTMAG compilation, plotted on a world map and revealed chronologically. 1,582 of them are individually reconstructed ship voyages: as the clock runs, each track is drawn as the ship sails it, with a marker at the vessel\'s position on that date.',
      'Most of these readings were taken by navigators, not scientists. Declination had to be known to steer by compass, so the record of the historical field is a by-product of four centuries of merchant and naval shipping, and the map is as much a map of trade routes as of magnetism.',
      'HISTMAG combines land surveys, observatory records and ship-log declinations. The ship-log component follows Jonkers et al. (2003).',
    ],
    contents: [
      ['Observation points', '180,238 readings, coloured by year or by measured value.'],
      ['Voyage tracks', 'Each of 1,582 voyages drawn progressively as it is sailed.'],
      ['Sailing ships', 'A marker at each vessel\'s position for the current date.'],
      ['Fixed sites', 'Land surveys and observatories, around 100,000 records, separable from the ships.'],
      ['Cumulative or windowed', 'Show everything recorded so far, or only a five-year window.'],
    ],
    controls: [
      'Drag to pan, scroll to zoom.',
      'Drag the year slider or press Play.',
      'Toggle observation points, voyage tracks, ships and fixed sites independently.',
      'Switch the colour mode between year and measured value.',
      'Hover a point for its record.',
    ],
    lessons: [
      {
        title: 'The shape of the trade winds',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'The voyage tracks are not straight lines between ports. They are the shape of the wind, and the map draws it without ever mentioning weather.',
        steps: [
          'Play the sequence through the eighteenth century and watch the Atlantic tracks.',
          'Sketch the dominant route from Europe to the Caribbean, and the return route.',
          'Explain why the two are different, and why the outbound one dips so far south.',
          'Find the equivalent pattern in the Indian Ocean.',
        ],
        discussion: [
          'What does the empty middle of the South Pacific tell you?',
          'How would these routes change with a steam engine?',
        ],
      },
      {
        title: 'Reading the field from other people\'s logbooks',
        level: 'Undergraduate',
        duration: '90 min seminar',
        body: 'Every historical field model before the satellite era rests on measurements taken for navigation. That provenance sets what the models can and cannot resolve.',
        steps: [
          'Set the colour mode to measured value and step through the centuries.',
          'Identify which parts of the world have dense coverage in 1700, and which have none.',
          'Consider what a spherical harmonic model does over an ocean nobody crossed.',
          'Compare the coverage in 1600, 1750 and 1900.',
        ],
        discussion: [
          'Which parts of the historical field are measured and which are extrapolated?',
          'What would it take to improve the 1600 model today?',
        ],
      },
      {
        title: 'Why the compass lies',
        level: 'Outreach',
        duration: '10 min',
        body: 'Magnetic declination as the practical problem that generated all this data.',
        steps: [
          'Show a point and read its declination off the popup.',
          'Explain that a compass points at the magnetic pole, not the geographic one.',
          'Run the clock and show that the value at a fixed place keeps changing.',
        ],
        discussion: ['If the field drifts, how did anyone navigate before GPS?'],
      },
    ],
  },
];

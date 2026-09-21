// Two viewers about the history of measurement rather than the history of the
// Earth: where the ships went, and what they wrote down on the way.

export default [
  {
    slug: 'marine-survey',
    title: 'Marine survey globe',
    tagline: 'Forty years of ships crossing the ocean, one year at a time.',
    collection: 'Survey history',
    kind: 'Globe viewer',
    url: 'https://siwill22.github.io/marine-survey-globe/',
    live: true,
    repo: 'https://github.com/siwill22/marine-survey-globe',
    thumb: 'marine-survey.jpg',
    summary: [
      'Marine magnetic and gravity coverage accumulating from 1960 to 2002 over a relief backdrop. Every track is a real cruise, coloured by the residual field it measured, with a running percentage of seafloor surveyed.',
      'Coverage is not a survey design. It is an accumulation of cruises funded for their own reasons, and the gaps are where nobody had a reason to go.',
    ],
    contents: [
      ['Tracks', '~20 million measurements, GEODAS volumes 1–4.'],
      ['Colour', 'Cleaned residual field in nT, blue to red about zero.'],
      ['Cruises', 'Hover for ship, institution and, where known, chief scientist.'],
      ['Charts', 'Cumulative coverage, annual track-km against oil price, north/south asymmetry.'],
      ['Antarctic', 'ADMAP2 values and an AntMagic age grid, in EPSG:3031.'],
      ['Projections', 'Globe or Plate Carrée.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Press play or drag the timebar.',
      'Chart icon opens the context charts; S switches to the Antarctic layer.',
    ],
    lessons: [
      {
        title: 'Where the data is not',
        level: 'Undergraduate',
        duration: '60 min',
        steps: [
          'Run to 2002. Identify the three largest unsurveyed areas.',
          'For each, propose a reason: remoteness, ice, weather, politics, or nobody asking.',
          'Check the north/south chart against where the funding agencies were.',
        ],
        ask: 'Every global grid interpolates across these holes. What does that do to a number read off one?',
      },
      {
        title: 'Survey effort follows the money',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Open the charts. Describe the shape of annual survey effort.',
          'Overlay the oil price and mark where the two move together.',
          'Find a year where they do not, and look up why.',
        ],
        ask: 'What kind of science gets done in a downturn?',
      },
      {
        title: 'Stripes on the seafloor',
        level: 'Outreach',
        duration: '10 min',
        steps: [
          'Zoom to a well-surveyed stretch of the Mid-Atlantic Ridge.',
          'Show the colour flipping along a track that crosses it.',
          'Each flip is the field reversing, frozen into cooling rock.',
        ],
        ask: 'The field has flipped hundreds of times. Would we notice the next one?',
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
      '180,238 declination, inclination and intensity readings from HISTMAG, revealed chronologically. 1,582 are reconstructed ship voyages: each track draws as the ship sails it, with a marker at the vessel\'s position on that date.',
      'Most of these readings were taken by navigators. Declination had to be known to steer by, so the record of the historical field is a by-product of four centuries of shipping, and the map is as much one of trade routes as of magnetism.',
    ],
    contents: [
      ['Points', '180,238 readings, coloured by year or by value.'],
      ['Voyages', '1,582 tracks, drawn as they are sailed.'],
      ['Ships', 'A marker per vessel at the current date.'],
      ['Fixed sites', '~100,000 land surveys and observatory records.'],
      ['Window', 'Everything so far, or a five-year window.'],
    ],
    controls: [
      'Drag to pan, scroll to zoom.',
      'Drag the year slider or press play.',
      'Toggle points, tracks, ships and fixed sites independently.',
    ],
    lessons: [
      {
        title: 'The shape of the trade winds',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Play through the eighteenth century, watching the Atlantic.',
          'Sketch the dominant route out to the Caribbean, and the route back.',
          'Explain why they differ, and why the outbound dips so far south.',
          'Find the same pattern in the Indian Ocean.',
        ],
        ask: 'What does the empty middle of the South Pacific tell you?',
      },
      {
        title: 'The field from other people\'s logbooks',
        level: 'Undergraduate',
        duration: '90 min',
        steps: [
          'Colour by measured value and step through the centuries.',
          'Say which parts of the world have dense coverage in 1700, and which have none.',
          'Consider what a spherical harmonic model does over an ocean nobody crossed.',
        ],
        ask: 'Which parts of the historical field are measured, and which are extrapolated?',
      },
      {
        title: 'Why the compass lies',
        level: 'Outreach',
        duration: '10 min',
        steps: [
          'Show a point and read its declination.',
          'A compass points at the magnetic pole, not the geographic one.',
          'Run the clock: the value at a fixed place keeps changing.',
        ],
        ask: 'If the field drifts, how did anyone navigate before GPS?',
      },
    ],
  },
];

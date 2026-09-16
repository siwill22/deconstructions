// The two Spilhaus pages -- D3 rather than WebGL, and about projection
// rather than time. Neither is deployed yet.

const SM = 'https://siwill22.github.io/StoryMaps/';

export default [
  {
    slug: 'spilhaus-agegrid',
    title: 'Seafloor age in the Spilhaus projection',
    tagline: 'The ocean as one body of water, coloured by how old its floor is.',
    collection: 'Map projections',
    kind: 'Interactive map',
    url: SM + 'spilhaus-agegrid/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'spilhaus-agegrid.jpg',
    summary: [
      'A seafloor age grid reprojected into the Spilhaus aspect — the oblique Adams "world in a square" projection, which cuts the Earth along continents instead of along an ocean and so shows the world ocean as one connected body.',
      'On a Mercator or Robinson map, the Pacific is split down the middle and the Southern Ocean is a strip along the bottom. Here the ridges form a single continuous seam running through the whole square, which is a much better picture of what the mid-ocean ridge system actually is.',
      'The source grid is a 6 arc-minute global age grid, decimated to 0.2°, with NaN over anything that is not preserved ocean floor.',
    ],
    contents: [
      ['Seafloor age', 'Ages from ~0 to ~339 Ma, with no data where the floor has been subducted or never existed.'],
      ['The Spilhaus aspect', 'An equal-area square centred so the ocean is continuous.'],
      ['Graticule and coastlines', 'Drawn over the reprojected grid so the distortion is legible.'],
    ],
    controls: [
      'The first render takes a few seconds while the inverse-projection lookup table is built; progress shows under the map.',
    ],
    lessons: [
      {
        title: 'Find the ridge system in one piece',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'The same map on two projections, and a question about what the projection is doing to the argument.',
        steps: [
          'Show a conventional world map of seafloor age and ask students to trace the ridge system with a finger.',
          'Show the Spilhaus version and ask them to do it again.',
          'Ask which one made it easier and why.',
        ],
        discussion: [
          'Every flat map distorts something. What does this one distort, and what does it protect?',
          'Who decided that the Atlantic goes in the middle?',
        ],
      },
      {
        title: 'Age, symmetry and spreading rate',
        level: 'Undergraduate',
        duration: '60 min practical',
        body: 'Symmetric age stripes about a ridge are the original evidence for seafloor spreading. Their width is the spreading rate.',
        steps: [
          'Pick a point on the Mid-Atlantic Ridge and measure the distance to the 40 Ma contour on each side.',
          'Convert to a half-spreading rate.',
          'Repeat on the East Pacific Rise and compare.',
          'Find somewhere the pattern is not symmetric and suggest why.',
        ],
        discussion: [
          'Why is the oldest ocean floor only ~200 Ma when continents are billions of years old?',
          'What does the area of no-data tell you about how much ocean floor has been destroyed?',
        ],
      },
    ],
  },
  {
    slug: 'spilhaus-viewer',
    title: 'Spilhaus world ocean map',
    tagline: 'The projection on its own, stripped to graticule and coastline.',
    collection: 'Map projections',
    kind: 'Interactive map',
    url: SM + 'spilhaus-viewer/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'spilhaus-viewer.jpg',
    summary: [
      'The Spilhaus projection with nothing on it but a 30° graticule and the world\'s coastlines. No data layer, no time axis, no interpretation.',
      'That emptiness is the use. Handed to a class cold, it is a puzzle: the continents are recognisable individually but the arrangement is not, and working out what has been done to the globe to produce it is a better introduction to projection than any amount of being told.',
    ],
    contents: [
      ['Graticule', 'Latitude and longitude at 30° intervals, so the distortion can be seen directly.'],
      ['Coastlines', 'The continents, sliced and rearranged around the edge of the square.'],
    ],
    controls: ['Static map — open it and look.'],
    lessons: [
      {
        title: 'What has been done to this globe?',
        level: 'Senior secondary',
        duration: '30 min starter',
        body: 'Show the map with no explanation and let the class reverse-engineer it.',
        steps: [
          'Project the map and ask students to name as many continents as they can.',
          'Ask where the poles are, and have them find both on the graticule.',
          'Ask what has been cut and what has been kept whole.',
          'Only then name the projection and say who made it and why.',
        ],
        discussion: [
          'Whose map is a normal world map, and what does its centre say about who drew it?',
          'If you were a fish, which projection would you want?',
        ],
      },
      {
        title: 'The edge is the same place twice',
        level: 'Undergraduate',
        duration: '30 min',
        body: 'Tracing the square\'s boundary is the quickest way to make the topology of a projection concrete.',
        steps: [
          'Pick a coastal point that appears twice on the square\'s edge and find both copies.',
          'Trace the edge and record where the map repeats.',
          'Sketch how the square would have to be folded to close the sphere back up.',
        ],
        discussion: ['Which properties can a flat map preserve at once, and which combinations are impossible?'],
      },
    ],
  },
];

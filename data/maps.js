// The Spilhaus page: D3 rather than WebGL, and about projection rather than
// time. Not deployed yet.

export default [
  {
    slug: 'spilhaus-agegrid',
    title: 'Seafloor age, Spilhaus',
    tagline: 'The ocean as one body of water, coloured by the age of its floor.',
    collection: 'Map projections',
    kind: 'Interactive map',
    url: 'https://siwill22.github.io/StoryMaps/spilhaus-agegrid/',
    live: false,
    repo: 'https://github.com/siwill22/StoryMaps',
    thumb: 'spilhaus-agegrid.jpg',
    summary: [
      'A seafloor age grid in the Spilhaus aspect, the oblique Adams square that cuts the Earth along continents instead of along an ocean. On a Mercator the Pacific is split and the Southern Ocean is a strip at the bottom. Here the ridges form one continuous seam.',
    ],
    contents: [
      ['Age', '0 to ~339 Ma, blank where the floor is gone or never existed.'],
      ['The aspect', 'An equal-area square centred so the ocean is continuous.'],
      ['Overlay', 'Graticule and coastlines, so the distortion is legible.'],
    ],
    controls: ['First render takes a few seconds while the inverse-projection table builds.'],
    lessons: [
      {
        title: 'Find the ridge system in one piece',
        level: 'Senior secondary',
        duration: '50 min',
        steps: [
          'Show a conventional world map of seafloor age. Trace the ridge system with a finger.',
          'Show the Spilhaus version. Trace it again.',
          'Ask which was easier, and why.',
        ],
        ask: 'Every flat map distorts something. What does this one protect?',
      },
      {
        title: 'Age, symmetry, spreading rate',
        level: 'Undergraduate',
        duration: '60 min',
        steps: [
          'On the Mid-Atlantic Ridge, measure the distance to the 40 Ma contour each side.',
          'Convert to a half-spreading rate.',
          'Repeat on the East Pacific Rise.',
          'Find somewhere the pattern is not symmetric and say why.',
        ],
        ask: 'Why is the oldest ocean floor ~200 Ma when continents are billions of years old?',
      },
      {
        title: 'What has been done to this globe?',
        level: 'Senior secondary',
        duration: '30 min',
        steps: [
          'Show the map with no explanation. Name as many continents as you can.',
          'Find both poles on the graticule.',
          'Say what has been cut and what has been kept whole.',
          'Only then name the projection.',
        ],
        ask: 'Whose map is a normal world map, and what does its centre say about who drew it?',
      },
    ],
  },
];

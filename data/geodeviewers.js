// Viewers from the GeodeViewers repo: standalone, independently buildable
// pages on Geode's engine, each deployed under one Pages site rather than
// living in the Geode monorepo.

const GV = 'https://siwill22.github.io/GeodeViewers/';

export default [
  {
    slug: 'plate-tree',
    title: 'Plate Tree',
    tagline: 'The hierarchy of rotations a reconstruction is actually built from.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GV + 'PlateTree/',
    live: true,
    repo: 'https://github.com/siwill22/GeodeViewers',
    thumb: 'plate-tree.jpg',
    summary: [
      'A plate reconstruction is not a list of positions. It is a hierarchy of relative rotations: every plate is positioned relative to another plate, which is positioned relative to another, up to an anchor. An ordinary reconstruction map hides this completely. You cannot tell by looking at two continents that one is being placed through the other, or that its position is the product of thirty-seven composed rotations.',
      'This viewer draws the hierarchy on the globe and runs it through time, using Cao et al. (2024) from 0 to 1800 Ma, anchored at plate 0. Each plate gets a node; each hop of the hierarchy gets a link. Click a plate and it traces the full circuit back to the anchor.',
      'Most links carry no relative motion at all. At 0 Ma, 426 of 496 are locked, meaning the two plates they join move as one mass and the link is pure bookkeeping. Drawing that distinction is what turns the tree from a tangle into a reading of the model.',
    ],
    contents: [
      ['Nodes', 'One per plate carrying geometry at the current age, placed at the boundary centroid of that plate\'s largest polygon.'],
      ['Moving and locked links', 'Orange links carry real relative motion; faint ones are locked, with no relative motion between the plates they join.'],
      ['Patched links', 'Dashed, where the rotation circuit passes through plates with no geometry at this age, so the two ends are not actually neighbours.'],
      ['Locked groups', 'Node colour is the set of plates the model moves as one. The group count is a supercontinent signal taken straight from the rotation file with no geometry involved: 71 groups at 0 Ma, 26 at 100 Ma, 11 by 1000 Ma.'],
      ['Root plates', 'Yellow nodes, the plates closest to the anchor that carry geometry. There is often more than one — four at 500 Ma.'],
      ['Static polygons or topologies', 'Two different statements about the same model: the tree from rigid static polygons (497 plates at 0 Ma, 70 moving links and 426 locked) or from resolved topologies (46 plates, 37 moving and 7 locked).'],
      ['The plate mosaic', 'Every static polygon, oceanic as well as continental, with coastlines drawn over it. Toggleable.'],
      ['Centre longitude', 'Slides the central meridian on a flat map, so the Pacific can sit in the middle instead of split down the antimeridian.'],
      ['Projections', 'Globe, Robinson and Plate Carrée.'],
    ],
    controls: [
      'Drag to rotate the globe, or drag a flat map to scroll longitude.',
      'The age slider runs 0 to 1800 Ma; the tree is sampled every 5 Myr.',
      'Click a plate to trace its circuit to the anchor.',
      'Toggle locked links, group colouring, plate id labels and coastlines from the panel.',
      'Switch "built from" between static polygons and topologies.',
    ],
    lessons: [
      {
        title: 'Count the rotations behind one continent',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'Every position on a reconstruction map is a composed chain. Students pick a plate and follow it home.',
        steps: [
          'At 100 Ma, click a plate near the edge of the tree and read its circuit to the anchor.',
          'Count the hops, and note which of them are moving and which are locked.',
          'Repeat for a plate close to a root and compare the chain lengths.',
          'Move to 500 Ma and check whether the same plate still takes the same route.',
        ],
        discussion: [
          'If one rotation in a chain is revised, which plates move and which do not?',
          'What does that imply for citing a reconstruction as a single result?',
        ],
      },
      {
        title: 'Two trees from one model',
        level: 'Undergraduate',
        duration: '60 min seminar',
        body: 'The static-polygon tree and the topological tree describe the same model and look nothing alike. Working out why is the lesson.',
        steps: [
          'At 0 Ma, record the plate and link counts under static polygons, then under topologies.',
          'Note that static gives mostly locked links and topological gives mostly moving ones.',
          'Explain the difference in terms of what each kind of polygon is.',
          'Decide which tree you would quote if asked how many plates the model has.',
        ],
        discussion: [
          'Is a static-polygon fragment a plate?',
          'Which count would you expect to see in a paper, and would it be the right one?',
        ],
      },
      {
        title: 'Supercontinents, counted without looking at a map',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'The number of locked groups is how many independently moving masses the model contains. It falls as continents assemble, and the fall is visible without inspecting any geography.',
        steps: [
          'Turn on group colouring and record the locked group count at 0, 100, 250, 500 and 1000 Ma.',
          'Plot count against age.',
          'Mark the known supercontinent assemblies on the same axis.',
          'Check the map at the lowest count and describe what the world looks like there.',
        ],
        discussion: [
          'Does a falling group count prove continents were joined, or only that the model moves them together?',
          'What would a model with one group everywhere be saying?',
        ],
      },
      {
        title: 'What a reconstruction really is',
        level: 'Outreach',
        duration: '10 min at a stand',
        body: 'The map everyone has seen is the output. This is the machinery underneath it.',
        steps: [
          'Show the globe at 0 Ma with the tree drawn over it.',
          'Click a plate and follow the orange line back to the anchor.',
          'Run the age slider and let the whole structure reorganise.',
        ],
        discussion: ['If everything moves relative to something else, what is anything measured against?'],
      },
    ],
  },
];

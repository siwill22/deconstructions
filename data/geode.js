// The Geode globe viewers: https://github.com/siwill22/Geode
//
// All five share one three.js/Vite engine (viewer/src/core) and the same
// archive format, so the controls below repeat: a class that learns them on
// one viewer can use any of the others.

const GEODE = 'https://siwill22.github.io/Geode/';

export default [
  {
    slug: 'mantle',
    title: 'The mantle viewer',
    tagline: 'Cut the Earth open and look at the structure inside.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GEODE + 'index.html',
    live: true,
    repo: 'https://github.com/siwill22/Geode',
    thumb: 'mantle.jpg',
    summary: [
      'Seismic tomography and mantle-convection models rendered as a real 3D volume inside a rotating globe. You draw a polygon on the surface, and the viewer cuts the Earth away along it. The walls and floor of the cut are textured with the model interpolated onto the cut surface, so the slab or plume you are looking at is the model\'s own values, not a pre-rendered cross-section.',
      'Reconstructed coastlines and plate boundaries ride on the surface, so a subducted slab at 1000 km depth can be compared with where the trench that fed it actually was.',
    ],
    contents: [
      ['Tomography models', 'Shear- and compressional-wave speed anomalies through the whole mantle, shown as a volume rather than a stack of depth slices.'],
      ['A convection run', 'A mantle-convection model scrubbed through 200 Myr, so downwellings can be watched forming rather than inferred from one snapshot.'],
      ['User-drawn cutaway', 'Click points on the globe to define a polygon; the volume inside is removed and the exposed faces carry the model.'],
      ['Isosurfaces', 'Contour the anomaly field in 3D to isolate fast (cold, dense) or slow (hot, buoyant) bodies as solid shapes.'],
      ['Depth slices with a sinking readout', 'A movable horizontal slice, with the depth-to-age conversion that turns "how deep" into "how long ago".'],
      ['Surface layers', 'Reconstructed coastlines and plate boundaries at any time in the model range, drawn over or through the cutaway.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'The time slider moves the surface reconstruction; the mantle volume follows for convection models.',
      'Cutaway: click to place polygon vertices on the globe, close the ring to cut.',
      'The control panel (top right) selects model, variable, colour ramp and depth range.',
    ],
    lessons: [
      {
        title: 'Find the slab, then find its trench',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'Students locate a fast anomaly in the lower mantle and work backwards to the subduction zone that produced it.',
        steps: [
          'Cut a section across the western Pacific and identify a continuous fast anomaly descending through the transition zone.',
          'Read its depth from the depth slice, and convert to an approximate age using a sinking rate of ~1–2 cm/yr.',
          'Set the reconstruction time to that age and see whether a trench sat above the anomaly.',
          'Repeat under the Americas, where the answer is cleaner, and under Africa, where it is not.',
        ],
        discussion: [
          'What does the spread in published sinking rates do to your age estimate?',
          'Which parts of this chain are measurement, and which are model?',
        ],
      },
      {
        title: 'Hot and cold are not symmetric',
        level: 'Undergraduate',
        duration: '60 min tutorial',
        body: 'A structured comparison of the fast, thin, planar anomalies of slabs against the slow, broad anomalies beneath Africa and the Pacific.',
        steps: [
          'Build an isosurface at a fast threshold; note the shapes it produces.',
          'Build one at the equivalent slow threshold; note that the shapes are entirely different in scale and geometry.',
          'Change the threshold in both directions and record where each feature appears and disappears.',
        ],
        discussion: [
          'Why is the amplitude of a slow anomaly not simply the mirror of a fast one?',
          'How much of the difference is Earth, and how much is the resolution of the tomographic inversion?',
        ],
      },
      {
        title: 'What is under my feet?',
        level: 'Outreach',
        duration: '10 min at a stand',
        body: 'A short, guided look for a general audience: spin the globe to the visitor\'s home, cut straight down, and talk through the layers they pass.',
        steps: [
          'Cut a wedge under the visitor\'s home town.',
          'Point out the crust as a line too thin to see at this scale.',
          'Find the nearest cold sheet of old seafloor and say when it went down.',
        ],
        discussion: ['If the Earth were an apple, how thick is the skin?'],
      },
    ],
  },
  {
    slug: 'paleoclimate',
    title: 'The paleoclimate viewer',
    tagline: 'Temperature, rainfall and wind on a world that keeps changing shape.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GEODE + 'climate.html',
    live: true,
    repo: 'https://github.com/siwill22/Geode',
    thumb: 'paleoclimate.jpg',
    summary: [
      'Monthly-resolved output from two 540 Myr climate simulations, draped on a globe whose continents move underneath it. Surface temperature, precipitation and related fields can be read at any month of any modelled interval, over a paleogeography layer that shows what was land, shelf and deep ocean at the time.',
      'The Query Point is the teaching tool here: drop it and read a cell\'s value across all of time. Anchored mode holds a fixed latitude and longitude; Plate-Frame mode rides the moving piece of crust, so a single curve answers "what did the climate do here" versus "what did this rock experience".',
    ],
    contents: [
      ['Two independent simulations', 'Li et al. (2022) and Pohl et al. (2022), both spanning 540 Myr, selectable so their disagreements are visible.'],
      ['Monthly fields', 'Surface temperature and precipitation resolved month by month, not just as annual means.'],
      ['Derived variables', 'Annual mean, seasonality (the annual range), and Köppen climate classes computed from the monthly fields.'],
      ['Wind', 'Vector fields drawn as glyphs or as animated streaks.'],
      ['Paleogeography', 'Land, shallow sea and deep ocean for each time slice.'],
      ['Query Point', 'Anchored or Plate-Frame time series from any point on the globe.'],
      ['Multiple globes', 'Two or more globes tiled side by side, so a variable, a time or a model can be compared directly.'],
      ['Projections', 'Globe, Robinson, or Plate Carrée.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Time slider for the reconstruction; a separate month slider for seasonal fields.',
      'Query Point: place it, then choose Anchored or Plate-Frame.',
      'Multi-globe tiling from the control panel.',
    ],
    lessons: [
      {
        title: 'Continentality, measured',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Seasonality, the gap between the warmest and coldest month, is the cleanest single demonstration that big continents behave differently from oceans.',
        steps: [
          'Switch the variable to seasonality at the present day and describe the pattern in one sentence.',
          'Move to 250 Ma, when Pangaea is assembled, and describe it again.',
          'Drop Query Points at the centre and the edge of the supercontinent and compare their annual ranges.',
        ],
        discussion: [
          'Why does the middle of a continent swing further than a coast at the same latitude?',
          'Where would you rather farm, and why?',
        ],
      },
      {
        title: 'The rock\'s climate history, not the place\'s',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'Plate-Frame versus Anchored is the whole lesson. A coal seam records the climate of the latitude the crust was at when it formed, not the latitude it sits at now.',
        steps: [
          'Place an Anchored Query Point on a present-day coal basin and plot temperature through time.',
          'Switch the same point to Plate-Frame and plot it again.',
          'Identify where the two curves diverge, and check what the reconstruction says the crust was doing over that interval.',
        ],
        discussion: [
          'Which of the two curves would you compare against a proxy record from the outcrop? Why?',
          'What would you have concluded from the Anchored curve alone?',
        ],
      },
      {
        title: 'Two models, one question',
        level: 'Undergraduate',
        duration: '60 min seminar',
        body: 'Tile two globes, put a different simulation on each, and look for the intervals where they disagree.',
        steps: [
          'Set both globes to the same variable and time, one running Li et al., the other Pohl et al.',
          'Scrub through the Phanerozoic and note the intervals where the two disagree most.',
          'Use Query Points at the same location in both to quantify the difference.',
        ],
        discussion: [
          'Does agreement between two models make a result more likely to be true?',
          'What do the models share (boundary conditions, geography, solar constant) that would make them agree for the wrong reason?',
        ],
      },
    ],
  },
  {
    slug: 'valdes-bridge',
    title: 'The Valdes/BRIDGE viewer',
    tagline: 'A coupled simulation with an ocean you can look inside.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GEODE + 'valdes.html',
    live: true,
    repo: 'https://github.com/siwill22/Geode',
    thumb: 'valdes.jpg',
    summary: [
      'The Valdes et al. (2021) BRIDGE simulation, given its own viewer because its ocean grid does not share a depth range with the atmospheric fields of the main paleoclimate viewer. The atmosphere is monthly; the ocean is annual across 20 depth levels.',
      'That ocean depth axis is the point. Sea-surface temperature is one slice of a three-dimensional field, and the viewer lets a class descend through it, watching a warm surface ocean give way to circulation that looks nothing like the surface.',
    ],
    contents: [
      ['Atmosphere, monthly', 'Surface air temperature and related fields, month by month.'],
      ['Ocean, 20 depth levels', 'Potential temperature and velocity on an annual mean, at each modelled depth.'],
      ['Ocean currents', 'Velocity drawn as glyphs or streaks, at any depth level.'],
      ['Reconstructed surface layers', 'The same coastline and boundary layers as the other Geode viewers.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Depth selector for ocean variables; month slider for atmospheric ones.',
      'Vector field toggle for currents, as glyphs or streaks.',
    ],
    lessons: [
      {
        title: 'Descending through the thermocline',
        level: 'Undergraduate',
        duration: '60 min practical',
        body: 'Step down the 20 depth levels and record where the temperature gradient is steepest.',
        steps: [
          'Start at the surface and record ocean temperature at a fixed low-latitude point at each level.',
          'Plot temperature against depth and mark the thermocline.',
          'Repeat at a high-latitude point and explain why the shape is different.',
        ],
        discussion: ['Where in the ocean is there effectively no thermocline, and what does that imply for deep-water formation?'],
      },
      {
        title: 'Surface currents are not the whole circulation',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Turn on current streaks at the surface, then at the deepest level, and compare.',
        steps: [
          'Draw the surface current pattern as gyres on a blank map.',
          'Switch to the deepest level and draw it again.',
          'Mark the places where the two flow in opposite directions.',
        ],
        discussion: ['If you dropped a message in a bottle and a message in a submarine at the same spot, where would each end up?'],
      },
    ],
  },
  {
    slug: 'old-map',
    title: 'The Old Map viewer',
    tagline: 'A plate reconstruction drawn as an aged engraved chart.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GEODE + 'oldmap.html',
    live: false,
    repo: 'https://github.com/siwill22/Geode',
    thumb: 'old-map.jpg',
    summary: [
      'The same reconstruction data as the other viewers, rendered in the visual language of an eighteenth-century chart: pen coastlines, a graded wash running inland from the shore, nested offshore rings in place of bathymetry, hachured mountain glyphs standing where the reconstruction puts an orogen, and volcano symbols along ridges, over deep plumes and at large igneous province eruption sites, all on a stained and folded sheet.',
      'The ink is measured in kilometres, not pixels: the coastal wash is 400 km wide and the rings sit at fixed distances offshore, so zooming in widens them exactly as it widens the continents. The map does not change when you look at it more closely.',
      'This is the viewer that makes cartographic convention visible. Every other map in the set uses a colour ramp that students read without noticing; this one uses marks they have to be told how to read, which is a good way to make them notice that the ramps needed telling too.',
    ],
    contents: [
      ['Engraved coastlines', 'Pen-line coasts with a graded 0–400 km wash inland.'],
      ['Offshore rings', 'Nested contours at 100, 200, 350, 550, 800 and 1200 km from land.'],
      ['Hachured mountains', 'Glyphs placed where the reconstruction says an orogen stands.'],
      ['Volcanoes', 'Symbols along mid-ocean ridges, above deep mantle plumes, and at LIP eruption sites at their eruption time.'],
      ['One time slider', 'The only control that changes the geography.'],
      ['Projections', 'Globe, Robinson and Plate Carrée, with the ink scaling correctly in each.'],
    ],
    controls: [
      'Drag to rotate or pan, scroll to zoom.',
      'One time slider: scrub through the reconstruction.',
      'Projection switch between globe and flat map.',
    ],
    lessons: [
      {
        title: 'Reading a map you were not taught to read',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Give students the map with no legend and ask them to work out what each mark means before you tell them.',
        steps: [
          'Project the map at 100 Ma and ask the class to list every distinct kind of mark they can see.',
          'For each mark, take a hypothesis about what it represents and write it on the board.',
          'Reveal the legend and compare. The rings are usually guessed wrong, which is the useful part.',
          'Return to a modern colour-ramp map of the same time and ask what its conventions are.',
        ],
        discussion: [
          'Whose job is it to tell you what a colour on a map means?',
          'Which of these two maps is more honest about being an interpretation?',
        ],
      },
      {
        title: 'The cartography of the unknown',
        level: 'Outreach',
        duration: '15 min talk',
        body: 'Old charts used decoration where survey data ran out. This map uses the same decoration over a world where there is no survey data at all, because it has not existed for 100 million years.',
        steps: [
          'Show a real historical chart alongside the viewer at a comparable zoom.',
          'Scrub the time slider and let the coastlines move.',
          'Ask where the uncertainty in this map lives, given that it looks so confident.',
        ],
        discussion: ['Does a map that looks old make you trust it more or less?'],
      },
    ],
  },
  {
    slug: 'paleobiology',
    title: 'The paleobiology viewer',
    tagline: 'Fossil occurrences put back where they were collected from.',
    collection: 'Globe viewers',
    kind: 'Globe viewer',
    url: GEODE + 'paleobio.html',
    live: false,
    repo: 'https://github.com/siwill22/Geode',
    thumb: 'paleobiology.jpg',
    summary: [
      'Fossil occurrences from the Paleobiology Database, reconstructed to the position of the crust they were collected from, aggregated into equal-area cells on the sphere. The binning has to be equal-area: a plain latitude/longitude grid inflates polar cells, which would bend the latitudinal-diversity signal the coral case study depends on.',
      'The viewer is built around two case studies: corals through the Phanerozoic, and a biotic interchange where the plate reconstruction itself is the explanation.',
      'The diversity curve is raw. Sampled-in-bin genus counts are drawn on the same panel as the number of occurrences and the number of collections, so the sampling confound sits next to the signal rather than being silently corrected away.',
    ],
    contents: [
      ['Aggregate glyphs', 'One glyph per occupied equal-area cell, pie-divided by group and/or sized by richness.'],
      ['Raw occurrences', 'The individual collection points behind each glyph.'],
      ['Corals through the Phanerozoic', 'Latitudinal distribution, richness and turnover across four mass extinctions.'],
      ['A biotic interchange case study', 'Dispersal and vicariance where the changing plate geometry is the mechanism.'],
      ['Diversity with its confound', 'Genus richness plotted against occurrence and collection counts in the same bin.'],
      ['Projections', 'Globe, Robinson and Plate Carrée.'],
    ],
    controls: [
      'Drag to rotate, scroll to zoom.',
      'Time slider through the Phanerozoic.',
      'Toggle between aggregate glyphs and raw occurrences.',
      'Group and colour selectors in the control panel.',
    ],
    lessons: [
      {
        title: 'Is that a diversity crash or a rock record gap?',
        level: 'Undergraduate',
        duration: '90 min practical',
        body: 'The viewer puts richness, occurrence count and collection count on one panel precisely so this question can be asked honestly.',
        steps: [
          'Find a sharp drop in coral genus richness and note the time.',
          'Check whether occurrence and collection counts drop at the same time and by the same proportion.',
          'Classify the drop: signal, sampling, or undecidable from this data.',
          'Repeat for a second drop where the answer comes out differently.',
        ],
        discussion: [
          'What extra evidence would settle the cases you marked undecidable?',
          'Why might a published curve that has been subsampled not be more trustworthy than this one?',
        ],
      },
      {
        title: 'Corals track the tropics',
        level: 'Senior secondary',
        duration: '50 min',
        body: 'Reef corals are latitude-limited today. The reconstruction lets students test whether their fossil relatives were too.',
        steps: [
          'Set the time to the present and record the latitude band occupied by coral occurrences.',
          'Step back through the Phanerozoic in 50 Myr jumps, recording the band each time.',
          'Plot band against time and mark where it widens or narrows.',
        ],
        discussion: [
          'Where the band widens, is the climate warmer or is the continent in a different place?',
          'How would this plot look if the occurrences had not been reconstructed?',
        ],
      },
      {
        title: 'When a seaway closes',
        level: 'Outreach',
        duration: '15 min',
        body: 'Use the interchange case study to show an ocean barrier becoming a land bridge, and the fossil record reorganising around it.',
        steps: [
          'Zoom to the region before the connection forms and show the two separate faunas.',
          'Scrub forward through the closure.',
          'Show the same region afterwards, with the groups mixed.',
        ],
        discussion: ['What is a barrier for a fish is a highway for a mammal. What else works this way?'],
      },
    ],
  },
];

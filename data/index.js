// The catalog: everything the site knows about, in the order it is shown.
//
// Adding a viewer means adding an entry to one of these three files and
// dropping a JPEG into assets/thumbs/. There is no other step.

import geode from './geode.js';
import storymaps from './storymaps.js';
import maps from './maps.js';

export const viewers = [...geode, ...storymaps, ...maps];

// The order sections appear on the index page.
export const collections = ['Globe viewers', 'Story maps', 'Map projections'];

// Audience levels, in the order the filter chips show them. A viewer carries
// a level if any of its lesson ideas is written for that level.
export const levels = ['Senior secondary', 'Undergraduate', 'Outreach'];

export const site = {
  title: 'elstir',
  strap: 'Earth-science viewers, and what to teach with them.',
  intro: [
    'Thirteen interactive viewers of the Earth through deep time: mantle structure, plate reconstructions, paleoclimate, fossils, zircons, flood basalts and the ocean floor. Each one runs in a browser with nothing to install.',
    'Every viewer here has its own page: what is actually in it, how to drive it, and a handful of lesson plan ideas pitched at senior secondary, undergraduate or general audiences. Pick a panel to start.',
  ],
  // Elstir is Proust's painter, the one who paints a seascape so that the sea
  // reads as land and the land as sea. Good name for a shelf of maps that keep
  // rearranging the world.
  footer: [
    'Built by Simon Williams. The viewers themselves live in the <a href="https://github.com/siwill22/Geode">Geode</a> and <a href="https://github.com/siwill22/StoryMaps">StoryMaps</a> repositories; this site is the shelf they sit on.',
    'Lesson plan ideas are starting points, not vetted curriculum material. Take what is useful and rewrite the rest.',
  ],
};

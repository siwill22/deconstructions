// The catalog: everything the site knows about, in the order it is shown.
//
// Adding a viewer means adding an entry to one of these files and dropping a
// JPEG into assets/thumbs/. There is no other step.

import geode from './geode.js';
import geodeviewers from './geodeviewers.js';
import storymaps from './storymaps.js';
import surveys from './surveys.js';
import maps from './maps.js';

// One flat grid, in this order. The groupings below are labels on a page, not
// sections of the index.
export const viewers = [...geode, ...geodeviewers, ...storymaps, ...surveys, ...maps];

// Shown as the breadcrumb on each viewer's own page. The build rejects a
// record whose collection is not one of these.
export const collections = ['Globe viewers', 'Story maps', 'Survey history', 'Map projections'];

// Audience levels, in the order the filter chips show them. A viewer carries
// a level if any of its lesson ideas is written for that level.
export const levels = ['Senior secondary', 'Undergraduate', 'Outreach'];

// The footer logo row. `logo` is a file in assets/logos/; a record with
// `logo: null` falls back to its name set in type, so a missing file is a
// visible gap to fill rather than a broken image.
export const partners = [
  { name: 'GPlates', url: 'https://www.gplates.org', logo: 'gplates.png' },
  { name: 'AuScope', url: 'https://www.auscope.org.au', logo: 'auscope.png' },
  { name: 'EarthByte', url: 'https://www.earthbyte.org', logo: 'earthbyte.png' },
  { name: 'University of Sydney', url: 'https://www.sydney.edu.au', logo: 'usyd.svg' },
  { name: 'University of Tasmania', url: 'https://www.utas.edu.au', logo: 'utas.svg' },
  { name: 'Institute for Marine and Antarctic Studies', url: 'https://www.imas.utas.edu.au', logo: 'imas.png' },
];

export const site = {
  title: 'GPlates Deconstructions',
  strap: 'Viewers that take a reconstruction apart, and sketches for teaching with them.',
  intro: [
    'Fifteen viewers of the Earth through deep time. Each runs in a browser with nothing to install.',
    'Every one has a page here: what is in it, how to drive it, and a few lesson sketches. Prototype, throughout.',
  ],
  footer: [
    'Viewers live in <a href="https://github.com/siwill22/Geode">Geode</a>, <a href="https://github.com/siwill22/GeodeViewers">GeodeViewers</a>, <a href="https://github.com/siwill22/StoryMaps">StoryMaps</a> and <a href="https://github.com/siwill22/marine-survey-globe">marine-survey-globe</a>. This is the shelf.',
    'Lesson sketches are starting points, not vetted curriculum. Take what is useful.',
  ],
};

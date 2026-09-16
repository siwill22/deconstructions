# elstir

## Structure

```
data/           the catalog: one record per viewer, all the prose lives here
  geode.js        the five Geode globe viewers
  storymaps.js    the six StoryMaps pages
  surveys.js      the marine survey globe and HistMag
  maps.js         the Spilhaus seafloor age map
  index.js        concatenates them, plus site-level copy and the logo row
assets/
  style.css       one stylesheet for both page shapes
  thumbs/         one JPEG per viewer, 1100 px wide
  logos/          the footer partner logos
build.mjs       renders data/ into index.html + viewers/<slug>.html
```

`index.html` and `viewers/` are generated and gitignored. The Pages workflow
builds them on every push to `main`, so what is published is always what
`data/` currently says.

## Build and preview

```sh
node build.mjs          # writes index.html and viewers/*.html
npm run serve           # builds, then serves on http://localhost:8080
```

## Adding a viewer

1. Add a record to the relevant file in `data/`.
2. Drop a JPEG in `assets/thumbs/` and name it in the record's `thumb` field
   (or set `thumb: null` for a placeholder panel).
3. Run `node build.mjs`.

A record needs `slug`, `title`, `tagline`, `collection`, `kind`, `url`, `live`,
`repo`, `thumb`, `summary`, `contents`, `controls` and `lessons`. The build
throws on a duplicate slug, an unknown collection or an unknown lesson level
rather than quietly producing a page nobody can reach.

`live: false` marks a viewer that is built but not yet published: the panel
gets a "not yet deployed" badge and the launch button is replaced with a note
saying where it will live. Flip the flag when the viewer's own repo deploys.
A record with `repo: null` gets a different note again, for a page that exists
only as a local file; `status` adds a second badge, such as "work in progress".

## Footer logos

The partner row is `partners` in `data/index.js`. GPlates, AuScope, EarthByte
and Sydney are in `assets/logos/`, taken from each organisation's own site;
swap any of them for a brand-approved version if one is preferred. UTAS and
IMAS render as text wordmarks because both sites block automated fetching —
drop `utas.png` and `imas.png` into `assets/logos/` and set each record's
`logo` field to switch them over.

Every logo sits on a light chip. Institutional logos are drawn for white
paper, and a mix of dark-ink-on-transparency and white-plate files cannot go
onto a dark page without half of them disappearing.

## Panel images

Most come from the `shots-*` directories in the Geode repo, converted to JPEG
at 1100 px. The ones with no existing still were captured with Playwright
against the live or locally served page. A page whose globe creates its WebGL
context without `preserveDrawingBuffer` cannot be captured that way at all: the
screenshot comes back as an empty canvas, and the record needs `thumb: null`
until someone grabs a still by hand.


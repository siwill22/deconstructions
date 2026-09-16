# elstir


## Structure

```
data/           the catalog -- one record per viewer, all the prose lives here
  geode.js        the nine Geode globe viewers
  storymaps.js    the seven StoryMaps pages
  maps.js         the two Spilhaus pages
  index.js        concatenates them, plus site-level copy
assets/
  style.css       one stylesheet for both page shapes
  thumbs/         one JPEG per viewer, 1100 px wide
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

## Panel images

Most come from the `shots-*` directories in the Geode repo, converted to JPEG
at 1100 px. The four that had no existing still were captured with Playwright
against the live or locally served page. One page —
southern-ocean-gateways — has no image yet: its `js/story.js` has a syntax
error (an orphaned `catch` block) that stops the page loading, and its globe
creates its WebGL context without `preserveDrawingBuffer`, so a headless
screenshot comes back empty even once that is fixed.


# elstir

*Earth-science viewers, and what to teach with them.*

A shelf for the interactive viewers built in
[Geode](https://github.com/siwill22/Geode) and
[StoryMaps](https://github.com/siwill22/StoryMaps). The index page is a grid of
panels, three to a row, each showing a still from the viewer it points at. A
panel leads to a page describing what is actually in that viewer, how to drive
it, and a handful of lesson plan ideas pitched at senior secondary,
undergraduate or general audiences.

The site hosts nothing but descriptions and images. The viewers themselves stay
in their own repositories and are launched at their own URLs — this repo would
otherwise have to carry a few hundred megabytes of reconstruction archives it
has no business owning.

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

No dependencies, no bundler, no framework. The whole site is eighteen records
and two page templates.

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

## The name

Elstir is Proust's painter, the one whose seascapes are built on a metaphor
that makes the sea read as land and the land as sea. A reasonable name for a
shelf of maps that keep rearranging the world.

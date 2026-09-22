# GPlates Deconstructions

Live at <https://siwill22.github.io/deconstructions/>.

## Structure

```
data/           the catalog: one record per viewer, all the prose lives here
  geode.js        the five Geode globe viewers
  geodeviewers.js the standalone GeodeViewers pages
  storymaps.js    the three StoryMaps pages
  surveys.js      the marine survey globe and HistMag
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

Live flags go stale as the viewers' own repos deploy. `node build.mjs` does not
check them; a periodic pass over each `url` is what catches a viewer that has
gone live, or one that has moved.

`live: false` marks a viewer that is built but not yet published: the panel
gets a "not yet deployed" badge and the launch button is replaced with a note
saying where it will live. Flip the flag when the viewer's own repo deploys.
A record with `repo: null` gets a different note again, for a page that exists
only as a local file; `status` adds a second badge, such as "work in progress".



// Render the site from data/ into index.html and viewers/<slug>.html.
//
//   node build.mjs
//
// A plain script with template literals and no dependencies: the whole site is
// thirteen records and two page shapes, and a framework would be more machinery
// than content. Output is gitignored; the GitHub Actions workflow runs this and
// publishes the result.

import { mkdir, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { viewers, collections, levels, site } from './data/index.js';

const ROOT = dirname(fileURLToPath(import.meta.url));

/** Escape text destined for HTML body or attribute content. */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** The levels a viewer covers, in the canonical order, deduplicated. */
const levelsOf = (v) => levels.filter((l) => v.lessons.some((les) => les.level === l));

/**
 * Page chrome. `depth` is how far the page sits below the site root, so the
 * same template works for /index.html and /viewers/foo.html without any
 * server-side base path, which also means the built site opens correctly
 * from a file:// path or from a project-scoped GitHub Pages URL.
 */
function page({ title, description, depth, body, script = '' }) {
  const up = depth === 0 ? '' : '../';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="stylesheet" href="${up}assets/style.css">
</head>
<body>
${body}
<footer><div class="wrap">
${site.footer.map((p) => `<p>${p}</p>`).join('\n')}
</div></footer>
${script}
</body>
</html>
`;
}

/* ---- the index page ----------------------------------------------------- */

function panel(v) {
  const shot = v.thumb
    ? `<div class="shot"><img src="assets/thumbs/${esc(v.thumb)}" alt="${esc(v.title)}" loading="lazy" width="1100" height="688"></div>`
    : `<div class="shot placeholder">preview to come</div>`;
  const badges = [
    `<span class="badge">${esc(v.kind)}</span>`,
    ...levelsOf(v).map((l) => `<span class="badge level">${esc(l)}</span>`),
    v.live ? '' : '<span class="badge pending">not yet deployed</span>',
  ].filter(Boolean);
  return `<a class="panel" href="viewers/${esc(v.slug)}.html"
   data-collection="${esc(v.collection)}" data-levels="${esc(levelsOf(v).join('|'))}">
  ${shot}
  <div class="body">
    <h3>${esc(v.title)}</h3>
    <p class="tagline">${esc(v.tagline)}</p>
    <div class="badges">${badges.join('')}</div>
  </div>
</a>`;
}

function chipRow(label, name, values) {
  const chips = [['All', '']].concat(values.map((v) => [v, v]));
  return `<div class="filter-group" data-filter="${name}">
  <span class="label">${esc(label)}</span>
  ${chips
    .map(
      ([text, value], i) =>
        `<button class="chip" type="button" data-value="${esc(value)}" aria-pressed="${i === 0}">${esc(text)}</button>`,
    )
    .join('\n  ')}
</div>`;
}

// Filtering is eight lines of DOM work; it does not need a framework or a
// build step, and it degrades to "everything shown" if JS is off.
const FILTER_SCRIPT = `<script>
(function () {
  var state = { collection: '', level: '' };
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var empty = document.querySelector('.empty');

  function apply() {
    panels.forEach(function (p) {
      var okCollection = !state.collection || p.dataset.collection === state.collection;
      var okLevel = !state.level || p.dataset.levels.split('|').indexOf(state.level) !== -1;
      p.hidden = !(okCollection && okLevel);
    });
    var anyShown = false;
    sections.forEach(function (s) {
      var shown = s.querySelectorAll('.panel:not([hidden])').length;
      s.hidden = shown === 0;
      if (shown) anyShown = true;
    });
    if (empty) empty.style.display = anyShown ? 'none' : 'block';
  }

  document.querySelectorAll('.filter-group').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      group.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      state[group.dataset.filter] = chip.dataset.value;
      apply();
    });
  });
})();
</script>`;

function indexPage() {
  const sections = collections
    .map((c) => {
      const inSection = viewers.filter((v) => v.collection === c);
      if (!inSection.length) return '';
      return `<section data-section="${esc(c)}">
  <div class="section-head"><h2>${esc(c)}</h2><span class="rule"></span></div>
  <div class="grid">
${inSection.map(panel).join('\n')}
  </div>
</section>`;
    })
    .filter(Boolean)
    .join('\n\n');

  const body = `<header class="masthead"><div class="wrap">
  <h1 class="wordmark">${esc(site.title)}</h1>
  <p class="strap">${esc(site.strap)}</p>
  ${site.intro.map((p) => `<p class="intro">${p}</p>`).join('\n  ')}
</div></header>

<nav class="filters"><div class="wrap">
${chipRow('Collection', 'collection', collections)}
${chipRow('Level', 'level', levels)}
</div></nav>

<main><div class="wrap">
${sections}
<p class="empty">Nothing matches both filters. Try widening one.</p>
</div></main>`;

  return page({
    title: `${site.title} · ${site.strap}`,
    description: site.strap,
    depth: 0,
    body,
    script: FILTER_SCRIPT,
  });
}

/* ---- a viewer page ------------------------------------------------------ */

function lesson(l) {
  const discussion = l.discussion?.length
    ? `<div class="discussion"><span class="label">Discussion</span><ul>
      ${l.discussion.map((d) => `<li>${esc(d)}</li>`).join('\n      ')}
    </ul></div>`
    : '';
  return `<div class="lesson">
    <div class="meta">
      <span class="badge level">${esc(l.level)}</span>
      <span class="badge">${esc(l.duration)}</span>
    </div>
    <h3>${esc(l.title)}</h3>
    <p class="body">${esc(l.body)}</p>
    <ol class="steps">
      ${l.steps.map((s) => `<li>${esc(s)}</li>`).join('\n      ')}
    </ol>
    ${discussion}
  </div>`;
}

function viewerPage(v) {
  const launch = v.live
    ? `<a class="launch" href="${esc(v.url)}">Launch the viewer →</a>`
    : `<span class="launch disabled" aria-disabled="true">Not yet deployed</span>
     <p class="launch-note">This one is built but not yet published. It runs locally from
     <a href="${esc(v.repo)}">the repository</a>; the launch link will point at
     <code>${esc(v.url)}</code> once it is deployed.</p>`;

  const shot = v.thumb
    ? `<img src="../assets/thumbs/${esc(v.thumb)}" alt="${esc(v.title)}">`
    : `<div class="shot placeholder">preview to come</div>`;

  const body = `<header class="masthead compact"><div class="wrap">
  <p class="wordmark"><a href="../index.html">${esc(site.title)}</a></p>
</div></header>

<section class="hero"><div class="wrap">
  <div>
    <p class="crumbs"><a href="../index.html">All viewers</a> &nbsp;/&nbsp; ${esc(v.collection)}</p>
    <h1>${esc(v.title)}</h1>
    <p class="tagline">${esc(v.tagline)}</p>
    ${launch}
  </div>
  <div>${shot}</div>
</div></section>

<main><div class="wrap">
  <article>
    <h2>What it is</h2>
    <div class="prose">
      ${v.summary.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
    </div>

    <h2>What is in it</h2>
    <ul class="contents">
      ${v.contents
        .map(([term, def]) => `<li><span class="term">${esc(term)}</span><span class="def">${esc(def)}</span></li>`)
        .join('\n      ')}
    </ul>

    <h2>Driving it</h2>
    <ul class="controls">
      ${v.controls.map((c) => `<li>${esc(c)}</li>`).join('\n      ')}
    </ul>

    <h2>Lesson plan ideas</h2>
    <div class="lessons">
      ${v.lessons.map(lesson).join('\n      ')}
    </div>

    <h2>Source</h2>
    <div class="prose"><p>Built from <a href="${esc(v.repo)}">${esc(v.repo.replace('https://github.com/', ''))}</a>.</p></div>
  </article>
</div></main>`;

  return page({
    title: `${v.title} · ${site.title}`,
    description: v.tagline,
    depth: 1,
    body,
  });
}

/* ---- write it out ------------------------------------------------------- */

const seen = new Set();
for (const v of viewers) {
  if (seen.has(v.slug)) throw new Error(`duplicate slug: ${v.slug}`);
  seen.add(v.slug);
  if (!collections.includes(v.collection)) throw new Error(`${v.slug}: unknown collection ${v.collection}`);
  for (const l of v.lessons) {
    if (!levels.includes(l.level)) throw new Error(`${v.slug}: unknown level ${l.level}`);
  }
}

await rm(join(ROOT, 'viewers'), { recursive: true, force: true });
await mkdir(join(ROOT, 'viewers'), { recursive: true });
await writeFile(join(ROOT, 'index.html'), indexPage());
for (const v of viewers) {
  await writeFile(join(ROOT, 'viewers', `${v.slug}.html`), viewerPage(v));
}
// GitHub Pages runs Jekyll over the artifact unless told not to, which would
// swallow any path starting with an underscore.
await writeFile(join(ROOT, '.nojekyll'), '');

console.log(`built index.html and ${viewers.length} viewer pages`);

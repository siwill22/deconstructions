// Render the site from data/ into index.html and viewers/<slug>.html.
//
//   node build.mjs
//
// A plain script with template literals and no dependencies: the whole site is
// twelve records and two page shapes, and a framework would be more machinery
// than content. Output is gitignored; the GitHub Actions workflow runs this and
// publishes the result.

import { mkdir, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { viewers, collections, levels, partners, site } from './data/index.js';

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
${partnerRow(up)}
${site.footer.map((p) => `<p>${p}</p>`).join('\n')}
</div></footer>
${script}
</body>
</html>
`;
}

/**
 * The partner logo row. A partner with no logo file yet renders as its short
 * name set in type, which keeps the row complete and makes the missing file
 * obvious at a glance instead of leaving a broken image behind.
 */
function partnerRow(up) {
  const items = partners.map((p) => {
    const inner = p.logo
      ? `<img src="${up}assets/logos/${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy">`
      : `<span class="wordmark-fallback">${esc(p.short ?? p.name)}</span>`;
    return `<a class="partner" href="${esc(p.url)}" title="${esc(p.name)}">${inner}</a>`;
  });
  return `<div class="partners">\n${items.join('\n')}\n</div>`;
}

/* ---- the index page ----------------------------------------------------- */

function panel(v) {
  const shot = v.thumb
    ? `<div class="shot"><img src="assets/thumbs/${esc(v.thumb)}" alt="${esc(v.title)}" loading="lazy" width="1100" height="688"></div>`
    : `<div class="shot placeholder">no preview</div>`;
  const badges = [
    `<span class="badge">${esc(v.kind)}</span>`,
    ...levelsOf(v).map((l) => `<span class="badge level">${esc(l)}</span>`),
    v.live ? '' : '<span class="badge pending">not deployed</span>',
    v.status ? `<span class="badge pending">${esc(v.status.replace(/\.$/, '').toLowerCase())}</span>` : '',
  ].filter(Boolean);
  return `<a class="panel" href="viewers/${esc(v.slug)}.html" data-levels="${esc(levelsOf(v).join('|'))}">
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

// Filtering is a few lines of DOM work; it does not need a framework or a
// build step, and it degrades to "everything shown" if JS is off.
const FILTER_SCRIPT = `<script>
(function () {
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  var empty = document.querySelector('.empty');

  function apply(level) {
    var shown = 0;
    panels.forEach(function (p) {
      var ok = !level || p.dataset.levels.split('|').indexOf(level) !== -1;
      p.hidden = !ok;
      if (ok) shown++;
    });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  }

  document.querySelectorAll('.filter-group').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      group.querySelectorAll('.chip').forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      apply(chip.dataset.value);
    });
  });
})();
</script>`;

function indexPage() {
  const body = `<header class="masthead"><div class="wrap">
  <h1 class="wordmark">${esc(site.title)}</h1>
  <p class="strap">${esc(site.strap)}</p>
  ${site.intro.map((p) => `<p class="intro">${p}</p>`).join('\n  ')}
</div></header>

<nav class="filters"><div class="wrap">
${chipRow('Level', 'level', levels)}
</div></nav>

<main><div class="wrap">
<div class="grid">
${viewers.map(panel).join('\n')}
</div>
<p class="empty">Nothing at that level yet.</p>
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
  const ask = l.ask ? `<p class="discussion">${esc(l.ask)}</p>` : '';
  return `<div class="lesson">
    <p class="meta">${esc(l.level)} &middot; ${esc(l.duration)}</p>
    <h3>${esc(l.title)}</h3>
    <ol class="steps">
      ${l.steps.map((s) => `<li>${esc(s)}</li>`).join('\n      ')}
    </ol>
    ${ask}
  </div>`;
}

function viewerPage(v) {
  // Three states, not two: deployed; built and in a repo but unpublished; and
  // built on someone's laptop with no repository behind it yet.
  let launch;
  if (v.live) {
    launch = `<a class="launch" href="${esc(v.url)}">Launch</a>`;
  } else if (v.repo) {
    launch = `<span class="launch disabled" aria-disabled="true">Not deployed</span>
     <p class="launch-note">Runs locally from <a href="${esc(v.repo)}">the repository</a>${
       v.url ? `. It will live at <code>${esc(v.url)}</code>` : ''
     }.</p>`;
  } else {
    launch = `<span class="launch disabled" aria-disabled="true">Not deployed</span>
     <p class="launch-note">A local page with no repository yet, so there is nothing to link
     to. ${esc(v.status ?? '')}</p>`;
  }

  const shot = v.thumb
    ? `<img src="../assets/thumbs/${esc(v.thumb)}" alt="${esc(v.title)}">`
    : `<div class="shot placeholder">no preview</div>`;

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
    <section>
      <h2>What it is</h2>
      <div class="prose">
        ${v.summary.map((p) => `<p>${esc(p)}</p>`).join('\n        ')}
      </div>
    </section>

    <section>
      <h2>Contents</h2>
      <ul class="contents">
        ${v.contents
          .map(([term, def]) => `<li><span class="term">${esc(term)}</span><span class="def">${esc(def)}</span></li>`)
          .join('\n        ')}
      </ul>
    </section>

    <section>
      <h2>Controls</h2>
      <ul class="controls">
        ${v.controls.map((c) => `<li>${esc(c)}</li>`).join('\n        ')}
      </ul>
    </section>

    <section>
      <h2>Lesson sketches</h2>
      <div class="lessons">
        ${v.lessons.map(lesson).join('\n        ')}
      </div>
    </section>

    <section>
      <h2>Source</h2>
      <div class="prose"><p>${
        v.repo
          ? `<a href="${esc(v.repo)}">${esc(v.repo.replace('https://github.com/', ''))}</a>`
          : 'No public repository yet.'
      }</p></div>
    </section>
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

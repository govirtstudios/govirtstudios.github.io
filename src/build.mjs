import { mkdirSync, writeFileSync } from 'node:fs';
import { policy } from './privacy.mjs';

// Add a title here to update both catalogs. Paths are relative to docs/.
const games = [
  {
    id: 'perfect-balance',
    name: 'Perfect Balance',
    platform: 'Android',
    cover: null,
    storeUrl: null,
    privacy: 'privacidade-perfect-balance.html',
    enPrivacy: 'privacy-perfect-balance.html',
    pt: {
      tagline: 'Um desafio de lógica, equilíbrio e raciocínio.',
      description: 'Distribua os pesos entre os pratos da balança até encontrar o equilíbrio. Avance pela campanha, resolva o desafio diário ou teste seu raciocínio em 60 segundos.',
    },
    en: {
      tagline: 'A puzzle of logic, balance and reasoning.',
      description: 'Arrange weights on both pans until the scale balances. Play through the campaign, solve the daily challenge or put your reasoning to the test in 60 seconds.',
    },
  },
];

const translations = {
  pt: {
    lang: 'pt-BR',
    paths: ['index.html', 'jogos.html', 'privacidade-perfect-balance.html', 'contato.html'],
    labels: ['Início', 'Nossos jogos', 'Privacidade', 'Contato'],
    nav: 'Navegação principal', footer: 'Links do rodapé', skip: 'Ir para o conteúdo',
    studio: 'Estúdio independente brasileiro',
    headline: 'Criando novas formas de jogar.',
    intro: 'Somos um estúdio independente brasileiro criando jogos casuais para Android na linha GoVirt! Mobile.',
    catalog: 'Conheça nossos jogos',
    featured: 'Em destaque',
    catalogIntro: 'Explore o catálogo GoVirt! Mobile, nossa linha de jogos para Android.',
    placeholder: 'Captura do jogo em breve',
    soon: 'Em breve na Google Play', available: 'Disponível na Google Play',
    privacyTitle: 'Política de Privacidade',
    privacyIntro: 'Como a GoVirt! Studios trata dados no Perfect Balance para Android.',
    contactIntro: 'Para suporte, dúvidas sobre nossos jogos ou questões de privacidade, escreva para a GoVirt! Studios.',
    contactLocation: 'Desenvolvimento independente de jogos · Brasil',
    send: 'Enviar e-mail',
  },
  en: {
    lang: 'en',
    paths: ['index.html', 'games.html', 'privacy-perfect-balance.html', 'contact.html'],
    labels: ['Home', 'Our games', 'Privacy', 'Contact'],
    nav: 'Main navigation', footer: 'Footer links', skip: 'Skip to content',
    studio: 'Independent Brazilian game studio',
    headline: 'Creating new ways to play.',
    intro: 'We are an independent Brazilian studio making casual Android games under the GoVirt! Mobile label.',
    catalog: 'Explore our games',
    featured: 'Featured',
    catalogIntro: 'Explore GoVirt! Mobile, our lineup of Android games.',
    placeholder: 'Game screenshot coming soon',
    soon: 'Coming soon to Google Play', available: 'Available on Google Play',
    privacyTitle: 'Privacy Policy',
    privacyIntro: 'How GoVirt! Studios handles data in Perfect Balance for Android.',
    contactIntro: 'Email GoVirt! Studios for support, questions about our games or privacy inquiries.',
    contactLocation: 'Independent game development · Brazil',
    send: 'Send an email',
  },
};
const email = 'govirtstudios@gmail.com';
const escape = (value) => String(value).replace(/[&<">]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', '>': '&gt;' })[char]);

for (const [locale, t] of Object.entries(translations)) {
  const en = locale === 'en';
  const other = en ? translations.pt : translations.en;
  const assets = en ? '../assets/' : 'assets/';
  const root = en ? '../' : '';
  const alternate = (page) => (en ? '../' : 'en/') + other.paths[page];
  const link = (page, current) => '<a href="' + t.paths[page] + '"' + (page === current ? ' aria-current="page"' : '') + '>' + t.labels[page] + '</a>';
  const pages = [];
  const text = games[0][locale];

  function gameCard(game, heading, inCatalog) {
    const details = game[locale];
    const media = game.cover
      ? '<img class="game-media cover" src="' + root + escape(game.cover.src) + '" alt="' + escape(game.cover.alt[locale]) + '" width="768" height="480" loading="lazy">'
      : '<div class="game-media"><div class="scale" aria-hidden="true"><i></i><i></i><i></i></div><span>' + t.placeholder + '</span></div>';
    const status = game.storeUrl
      ? '<a class="button" href="' + escape(game.storeUrl) + '">' + t.available + '</a>'
      : '<span class="status">' + t.soon + '</span>';
    return '<article class="game-card" id="' + escape(game.id) + '">' + media + '<div class="game-info"><p class="eyebrow">' + escape(game.platform) + '</p><h2>' + escape(game.name) + '</h2><p class="game-tagline">' + escape(heading ?? details.tagline) + '</p>' +
      (inCatalog ? '<p>' + escape(details.description) + '</p>' : '') + status +
      '<div class="game-links">' + (inCatalog
        ? '<a href="' + escape(en ? game.enPrivacy : game.privacy) + '">' + t.privacyTitle + ' <span class="sr-only">' + escape(game.name) + '</span></a>'
        : '<a href="' + t.paths[1] + '#' + escape(game.id) + '">' + (en ? 'About the game' : 'Sobre o jogo') + ' <span aria-hidden="true">↗</span></a>') +
      '</div></div></article>';
  }

  pages.push({
    title: 'GoVirt! Studios | ' + t.headline,
    description: t.intro,
    content: '<section class="hero wrap"><div class="hero-copy"><p class="eyebrow">' + t.studio + '</p><h1>' + t.headline + '</h1><p class="lede">' + t.intro + '</p><a class="button" href="' + t.paths[1] + '">' + t.catalog + ' <span aria-hidden="true">↗</span></a></div><div class="hero-art"><img src="' + assets + 'logo.png" srcset="' + assets + 'logo-small.png 600w, ' + assets + 'logo.png 1024w" sizes="(max-width: 760px) 90vw, 580px" alt="GoVirt! Studios" width="1024" height="683" fetchpriority="high"></div></section><section class="wrap feature" aria-label="' + t.featured + '"><p class="eyebrow section-label">' + t.featured + '</p>' + gameCard(games[0], text.tagline, false) + '</section>',
  });
  pages.push({
    title: t.labels[1] + ' | GoVirt! Studios',
    description: t.catalogIntro,
    content: '<section class="wrap page-intro"><p class="eyebrow">GoVirt! Mobile</p><h1>' + t.labels[1] + '</h1><p class="lede">' + t.catalogIntro + '</p></section><section class="wrap catalog" aria-label="' + t.labels[1] + '">' + games.map((game) => gameCard(game, null, true)).join('') + '</section>',
  });
  const legal = policy[locale];
  pages.push({
    title: t.privacyTitle + ' — Perfect Balance | GoVirt! Studios',
    description: t.privacyIntro,
    content: '<header class="wrap page-intro legal-intro"><p class="eyebrow">Perfect Balance · Android</p><h1>' + t.privacyTitle + '</h1><p class="lede">' + t.privacyIntro + '</p></header><div class="wrap legal-layout"><aside class="contents" aria-labelledby="contents-title"><h2 id="contents-title">' + legal.contents + '</h2><ul>' +
      legal.sections.map(([id, title]) => '<li><a href="#' + id + '">' + title + '</a></li>').join('') +
      '</ul></aside><article class="legal">' +
      (legal.review ? '<p class="review"><strong>' + legal.review[0] + '</strong> ' + legal.review[1] + '</p>' : '') +
      legal.sections.map(([id, title, ...paragraphs]) => '<section id="' + id + '"><h2>' + title + '</h2>' + paragraphs.map((p) => '<p>' + p + '</p>').join('') + '</section>').join('') + '</article></div>',
  });
  pages.push({
    title: t.labels[3] + ' | GoVirt! Studios',
    description: t.contactIntro,
    content: '<section class="wrap page-intro"><h1>' + t.labels[3] + '</h1><p class="lede">' + t.contactIntro + '</p></section><section class="wrap contact"><div class="contact-card"><h2>GoVirt! Studios</h2><p>' + t.contactLocation + '</p><a class="email" href="mailto:' + email + '">' + email + '</a><a class="button" href="mailto:' + email + '">' + t.send + ' <span aria-hidden="true">↗</span></a></div></section>',
  });

  const dir = new URL(en ? '../docs/en/' : '../docs/', import.meta.url);
  mkdirSync(dir, { recursive: true });
  for (const [page, { title, description, content }] of pages.entries()) {
    const altLang = en ? 'pt-BR' : 'en';
    const nav = [0, 1, 2, 3].map((i) => link(i, page)).join('');
    const language = en ? 'Português do Brasil' : 'English';
    const reviewMeta = page === 2 && legal.review ? '<meta name="robots" content="noindex">' : '';
    writeFileSync(new URL(t.paths[page], dir), `<!doctype html>
<html lang="${t.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#090b18">
  <meta name="description" content="${escape(description)}">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  ${reviewMeta}
  <title>${escape(title)}</title>
  <link rel="icon" href="${assets}favicon.png" type="image/png">
  <link rel="alternate" hreflang="${altLang}" href="${alternate(page)}">
  <link rel="stylesheet" href="${assets}site.css">
</head>
<body>
  <a class="skip" href="#main">${t.skip}</a>
  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand" href="${t.paths[0]}"><img src="${assets}favicon.png" alt="" width="32" height="32"><span>GoVirt! Studios</span></a>
      <nav class="nav" aria-label="${t.nav}">${nav}</nav>
      <a class="language" href="${alternate(page)}" lang="${altLang}" hreflang="${altLang}" title="${language}">${en ? 'PT-BR' : 'EN'}<span class="sr-only"> — ${language}</span></a>
    </div>
  </header>
  <main id="main" tabindex="-1">${content}</main>
  <footer class="site-footer"><div class="wrap footer-inner">
    <p>GoVirt! Studios <span>· ${en ? 'Brazil' : 'Brasil'}</span></p>
    <nav aria-label="${t.footer}">${link(2, page)}${link(3, page)}</nav>
  </div></footer>
</body>
</html>
`);
  }
}

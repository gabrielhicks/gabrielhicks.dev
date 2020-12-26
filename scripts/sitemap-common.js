const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

const YOUR_AWESOME_DOMAIN = 'https://gabrielhicks.dev';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const pages = await globby([
    // include
    '../src/pages/**/*.js',
    '../src/pages/*.js',
    // exclude
    '!../pages/_*.js'
  ]);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('../src/pages/', '')
          .replace('.js', '')
          // eslint-disable-next-line require-unicode-regexp
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;

        return `
          <url>
            <loc>${YOUR_AWESOME_DOMAIN}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  // eslint-disable-next-line no-sync
  fs.writeFileSync('./public/sitemap-common.xml', formattedSitemap, 'utf8');
})();

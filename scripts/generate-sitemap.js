const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

const getDate = new Date().toISOString();

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/**/*.js',
    'pages/*.js',
    '!pages/api',
    '!pages/_*.js'
  ]);
  const sitemap = `
            ${pages
              .map((page) => {
                const path = page.replace('pages', '').replace('.js', '');
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://gabrielhicks.dev${route}`}</loc>
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
      ${sitemap}
    </urlset>
  `;

  const formatted = prettier.format(generatedSitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('./public/sitemap.xml', formatted, 'utf8');
})();

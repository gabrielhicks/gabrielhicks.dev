const title = 'Gabriel Hicks';
const description =
  'A portfolio of software engineering projects developed by Gabriel Hicks';

const SEO = {
  title,
  description,
  canonical: 'https://gabrielhicks.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://gabrielhicks.dev',
    title,
    description,
    images: [
      {
        url: 'https://gabrielhicks.dev/logo.png',
        alt: title,
        width: 2048,
        height: 2048
      }
    ]
  },
  twitter: {
    handle: '@gabrielhicksdev',
    site: '@gabrielhicksdev',
    cardType: 'summary_large_image'
  }
};

export default SEO;

const title = 'Gabriel Hicks - Software Engineer, Web Developer';
const description =
  'Gabriel Hicks is a software engineer who specializes in building applications and websites using the latest technologies.';

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
        url: 'https://gabrielhicks.dev/og.png',
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

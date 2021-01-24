import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://gabrielhicks.dev${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Gabriel Hicks`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Gabriel Hicks"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/public/favicons/android-chrome-192x192.png"
        publisherName="Gabriel Hicks"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;

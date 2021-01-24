/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React from 'react';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';
import Hero from '../components/Hero';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const url = 'https://gabrielhicks.dev/blog';
const title = 'Gabriel Hicks | Blog';
const heroTitle = 'blog';
const description = 'thinking in public';

export default function Blog({ posts }) {
  const blogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container height="100%">
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <DarkModeSwitch />
      <Hero title={heroTitle} subtitle={description} />
      <div>
        {!blogPosts.length && 'Blogs could not be found.'}
        <Main spacing={4} columns={[1, 2]}>
          {blogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Main>
      </div>
      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

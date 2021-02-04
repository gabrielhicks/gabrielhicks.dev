/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React from 'react';

import { Container } from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';
import Hero from '../components/Hero';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

export default function Blog({ posts }) {
  const blogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container
      title="Blog - Gabriel Hicks"
      description="A collection of thoughts surrounding software development, new technologies, and life experience."
      height="100%"
    >
      <Hero title="blog" subtitle="thinking in public" />
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

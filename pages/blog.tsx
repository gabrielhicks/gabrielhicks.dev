import React from 'react';

import { Container } from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';
import Hero from '../components/Hero';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

interface Post {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  slug: string;
}

interface AllPosts {
  sort(byDateDesc: (a: Post, b: Post) => number): AllPosts[];
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  slug: string;
}

interface BlogProps {
  posts: AllPosts;
}

export default function Blog({ posts }: BlogProps) {
  function byDateDesc(a: Post, b: Post) {
    const bTime = new Date(b.publishedAt).getTime();
    const aTime = new Date(a.publishedAt).getTime();

    return bTime - aTime;
  }
  const blogPosts: AllPosts[] = posts.sort(byDateDesc);

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

import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPaths } from 'next';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blog';
import MDXComponents from '../../components/MDXComponents';

interface Source {
  compiledSource: string;
  renderedOutput: string;
}

interface Matter {
  wordCount: number;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
}

type BlogProps = {
  mdxSource: Source;
  frontMatter: Matter;
};

export default function Blog({ mdxSource, frontMatter }: BlogProps) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        // eslint-disable-next-line require-unicode-regexp
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const post = await getFileBySlug('blog', slug);

  return { props: post };
};

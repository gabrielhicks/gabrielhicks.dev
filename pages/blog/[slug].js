/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import BlogLayout from '../../layouts/blog';
import MDXComponents from '../../components/MDXComponents';

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}

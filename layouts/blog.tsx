import React, { ReactNode } from 'react';
import { parseISO, format } from 'date-fns';
import { Box } from '@chakra-ui/react';

import { Container } from '../components/Container';
import { MediumDivider } from '../components/mdx/MediumDivider';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import BlogSeo from '../components/BlogSeo';
import { BlogAvatar } from '../components/mdx/BlogAvatar';

type ReadingTime = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};

type BlogMatter = {
  wordCount: number;
  readingTime: ReadingTime;
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
};

interface LayoutProps {
  children: ReactNode;
  frontMatter: BlogMatter;
}

const BlogLayout = ({ children, frontMatter }: LayoutProps) => {
  return (
    <Container
      type="article"
      description={frontMatter.summary}
      title={`${frontMatter.title} – Gabriel Hicks`}
      image={`https://gabrielhicks.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
    >
      <BlogSeo
        url={`https://gabrielhicks.dev/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <Main spacing={4} columns={[1]}>
        <Box
          mx="2"
          my="2"
          maxW={['90vw', '75vw', '50vw']}
          textAlign="left"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderRadius="md"
          overflow="hidden"
        >
          <Box
            mt="20"
            borderRadius="md"
            fontWeight="800"
            fontSize="xx-large"
            as="h1"
          >
            {frontMatter.title}
          </Box>
          <Box
            mt="0"
            borderRadius="md"
            fontWeight="400"
            fontSize="x-large"
            as="h2"
          >
            {frontMatter.summary}
          </Box>
          <BlogAvatar
            date={format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            readingTime={frontMatter.readingTime.text}
          />
          <MediumDivider />
          {children}
        </Box>
      </Main>
      <Footer />
    </Container>
  );
};

export default BlogLayout;

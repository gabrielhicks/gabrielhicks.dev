/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React from 'react';
// import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { Box } from '@chakra-ui/react';

import { Container } from '../components/Container';
import { MediumDivider } from '../components/mdx/MediumDivider';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import BlogSeo from '../components/BlogSeo';
import { BlogAvatar } from '../components/mdx/BlogAvatar';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Gabriel Hicks`}
      description={frontMatter.summary}
      image={`https://gabrielhicks.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <BlogSeo
        url={`https://gabrielhicks.dev/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <Main spacing={4} columns={1}>
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
}

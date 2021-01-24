/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable get-off-my-lawn/prefer-arrow-functions */
import React from 'react';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { Box } from '@chakra-ui/react';

import { Container } from '../components/Container';
import { Main } from '../components/Main';
import BlogSeo from '../components/BlogSeo';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container>
      <BlogSeo
        url={`https://gabrielhicks.dev/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <Main spacing={4} columns={1}>
        <Box
          mx="2"
          my="2"
          maxW="70vw"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderRadius="md"
          overflow="hidden"
        >
          <Box borderRadius="md" fontSize="xx-large" as="h1">
            {frontMatter.title}
          </Box>
          <div>
            <div>
              <Image
                alt="Gabriel Hicks"
                height={24}
                width={24}
                src="/avatar.jpg"
                className="rounded-full"
              />
              <p>
                {frontMatter.by}
                {'Gabriel Hicks / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p>{frontMatter.readingTime.text}</p>
          </div>
          <div>{children}</div>
        </Box>
      </Main>
    </Container>
  );
}

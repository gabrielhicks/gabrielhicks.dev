import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Divider } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ title, summary, publishedAt, slug }) => {
  return (
    <>
      <Box
        mx="2"
        my="2"
        maxW="lg"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
      >
        {/* <Image width={3360} height={1864} src="/og.png" alt={title} /> */}

        <Box p="6">
          <Box
            pt="0"
            fontSize="x-large"
            fontWeight="bold"
            as="h2"
            lineHeight="tight"
          >
            <Link href={`/blog/${slug}`}>{title}</Link>
            <Divider role="separator" orientation="horizontal" />
          </Box>
          <Box pt="2">{summary}</Box>
          <Box fontSize="small" pt="2">
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogPost;

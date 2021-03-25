import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Box, Divider, Grid } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

type Props = {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
};

const BlogPost = ({ title, summary, publishedAt, slug }: Props) => {
  return (
    <>
      <Grid
        templateRows="(3, 1fr)"
        mx="2"
        my="2"
        maxW="lg"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        as="article"
      >
        {/* <Image width={3360} height={1864} src="/og.png" alt={title} /> */}

        <Grid templateRows="(3, 1fr)" p="6">
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
          <Box alignSelf="flex-end" fontSize="small" pt="2">
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPost;

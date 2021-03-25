import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Text,
  Heading,
  Code,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  Badge
} from '@chakra-ui/react';

import { MediumDivider as Divider } from './mdx/MediumDivider';
import { BlockQuote } from './mdx/BlockQuote';

const CustomHeading = (props) => (
  <Heading size="lg" as="h3" pb={2} {...props} />
);

const CustomParagraph = (props) => (
  <Text fontSize="lg" as="p" mt={4} {...props} />
);

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && href.startsWith('/');

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} />
      </NextLink>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  Box,
  Code,
  Text,
  Paragraph: CustomParagraph,
  p: CustomParagraph,
  Heading: CustomHeading,
  Badge,
  Divider,
  BlockQuote,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  OrderedList,
  Link: CustomLink
};

export default MDXComponents;

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
  Badge
} from '@chakra-ui/react';

import { MediumDivider as Divider } from './mdx/MediumDivider';

const CustomHeading = (props) => (
  <Heading size="lg" as="h3" pb={2} {...props} />
);

const CustomParagraph = (props) => (
  <Text fontSize="lg" as="p" mb={'1.5rem'} {...props} />
);

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

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
  Heading: CustomHeading,
  Badge,
  Divider,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  a: CustomLink
};

export default MDXComponents;

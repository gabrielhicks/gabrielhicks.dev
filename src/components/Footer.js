import React from 'react';
import {
  Youtube,
  Github,
  Twitter,
  Medium,
  Linkedin
} from '@icons-pack/react-simple-icons';
import { Flex, Link, HStack, Text } from '@chakra-ui/react';

export const Footer = (props) => (
  <>
    <Flex as="footer" pb="4rem" pt="12rem" {...props}>
      <HStack spacing="2em">
        <Link href="https://www.github.com/gabrielhicks/" isExternal>
          <Github size="2em" />
        </Link>
        <Link href="https://www.linkedin.com/in/gabrieljhicks/" isExternal>
          <Linkedin size="2em" />
        </Link>
        <Link href="https://twitter.com/gabrielhicksdev" isExternal>
          <Twitter size="2em" />
        </Link>
        <Link href="https://gabrielhicks.medium.com/" isExternal>
          <Medium size="2em" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCA9OKA7iSsfJUqnvEaDuZtg"
          isExternal
        >
          <Youtube size="2em" />
        </Link>
      </HStack>
    </Flex>
    <Link pb="10px" color="green.500" href="mailto:gabrielhicks@mail.com">
      gabrielhicks@mail.com
    </Link>
  </>
);

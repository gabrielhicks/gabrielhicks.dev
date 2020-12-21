import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui'
};

export default Hero;

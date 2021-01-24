import React from 'react';
import { Flex, Heading, Grid } from '@chakra-ui/react';

const Hero = ({ title, subtitle }) => (
  <Flex
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    height="80vh"
  >
    <Grid templateRows="repeat(2, 1fr)" gap={2}>
      <Heading as="h1" fontSize="10vw">
        {title}
      </Heading>
      <Heading fontWeight="normal" fontSize="5vw">
        {subtitle}
      </Heading>
    </Grid>
  </Flex>
);

Hero.defaultProps = {
  title: 'gabriel hicks',
  subtitle: 'software engineer'
};

export default Hero;

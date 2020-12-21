import React from 'react';
import { Flex, Heading, Grid } from '@chakra-ui/react';

const Hero = ({ title, subtitle }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Grid templateRows="repeat(2, 1fr)" gap={2}>
      <Heading fontSize="8vw">{title}</Heading>
      <Heading fontSize="4vw">{subtitle}</Heading>
    </Grid>
  </Flex>
);

Hero.defaultProps = {
  title: 'gabriel hicks',
  subtitle: 'software engineer'
};

export default Hero;

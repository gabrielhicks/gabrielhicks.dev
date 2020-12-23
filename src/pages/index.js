import React from 'react';
import { Link as ChakraLink, Text, Code } from '@chakra-ui/react';

import Hero from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Project } from '../components/Project';

const Index = () => (
  <Container height="100%">
    <Hero />
    <Main>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;

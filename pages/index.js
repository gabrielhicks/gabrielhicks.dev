import React from 'react';

import Hero from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { ProjectContainer } from '../components/ProjectContainer';

const Index = () => (
  <Container height="100%">
    <Hero />
    <Main spacing={2} columns={[1, 2, 3]}>
      <ProjectContainer />
    </Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;

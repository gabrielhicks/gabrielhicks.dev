import React from 'react';

import { projects } from '../db';
import Hero from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Project } from '../components/Project';

const myProjects = projects;

const Index = () => (
  <Container height="100%">
    <Hero />
    <Main>
      {myProjects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;

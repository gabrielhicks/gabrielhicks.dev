/* eslint-disable max-lines-per-function */
import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => {
  return (
    <>
      <Project
        title="Crypto Punk Search"
        image="/static/projects/crypto.jpg"
        repo={false}
        description="A searchable Crypto Punk database"
        tech={[
          'React',
          'TypeScript',
          'Chakra-UI',
          'Node',
          'Express',
          'HTML',
          'CSS'
        ]}
        frontend="https://github.com/gabrielhicks/cryptoPunkSearch"
        backend="https://github.com/gabrielhicks/cryptoPunksAPI"
        video={false}
        website="https://cryptopunk.vercel.app/"
      />
      <Project
        title="Jungle to Jungle"
        image="/static/projects/jungletojungle.jpg"
        repo="https://github.com/gabrielhicks/next-sanity-ecommerce"
        description="My current personal project, converting rPlants into a scalable and lighter-weight Sanity.io and Next.js site."
        tech={[
          'React',
          'Next.js',
          'Chakra-UI',
          'Sanity.io',
          'Tailwind',
          'HTML',
          'CSS'
        ]}
        frontend={false}
        backend={false}
        video={false}
        website="https://next-sanity-ecommerce-chi.vercel.app/"
      />
      <Project
        image="/static/projects/tutorialheaven.jpg"
        website="https://tutorial-heaven.netlify.app/"
        title="Tutorial Heaven"
        video="https://youtu.be/H87iCP8XYHU"
        frontend="https://github.com/gabrielhicks/tutorial-heaven"
        backend="https://github.com/gabrielhicks/tutorial_heaven_api"
        tech={[
          'React',
          'Redux',
          'Rails',
          'Framer Motion',
          'PostgreSQL',
          'JWT',
          'BCryrpt',
          'ActionCable',
          'Redis',
          'Material-UI',
          'styled-components'
        ]}
        repo={false}
        description="Web forum with live chat designed to encourage new developers to collaborate on projects."
      />
      <Project
        image="/static/projects/rplants.jpg"
        website="https://rplants.netlify.app/"
        title="rPlants"
        video="https://youtu.be/U8aKwmJFAq4"
        frontend="https://github.com/gabrielhicks/rplants-front"
        backend="https://github.com/gabrielhicks/rplants-back"
        repo={false}
        description="E-commerce platform to connect users to environmentally conscious sourced houseplants"
        tech={[
          'React',
          'Rails',
          'styled-components',
          'CSS',
          'HTML',
          'PostgreSQL',
          'JWT',
          'Leaflet',
          'OSM',
          'GeoJSON',
          'BCrypt'
        ]}
      />
      <Project
        title="Synthwave"
        image="/static/projects/synthwave.jpg"
        website={false}
        video="https://youtu.be/HsbjB8s-tSU"
        frontend="https://github.com/gabrielhicks/synthwave-frontend"
        backend="https://github.com/gabrielhicks/synthwaveheroku"
        repo={false}
        description="JavaScript / Rails interactive keyboard where users can play, record, and share music they create"
        tech={[
          'JavaScript',
          'Rails',
          'S3',
          'ActiveStorage',
          'WebAudio API',
          'HTML Canvas',
          'CSS',
          'PostgreSQL'
        ]}
      />
      <Project
        title="YouPlay"
        image="/static/projects/youplay.jpg"
        video="https://youtu.be/w7D92edjc4I"
        repo="https://github.com/gabrielhicks/YouPlay_postgreSQL"
        frontend={false}
        backend={false}
        description="Ruby on Rails application that allows a user to search for their favorite videos online"
        tech={[
          'Rails',
          'CSS',
          'jQuery',
          'Bootstrap',
          'YouTube API',
          'BCrypt',
          'Sqlite3'
        ]}
        website={false}
      />
      <Project
        title="Literally Just Vibing"
        image="/static/projects/vibing.jpg"
        repo="https://github.com/gabrielhicks/literallyjustvibing"
        frontend={false}
        backend={false}
        video={false}
        website={false}
        description="A Ruby CLI application that generates playlists based off a users mood via Spotify API and data analysis by Michael Nuzzolo"
        tech={['Ruby', 'Spotify API']}
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="Spicy Green Book (contributed)"
        image="/static/projects/sgb.jpg"
        repo="https://github.com/spicygreenbook/greenbook-app"
        description="An open source directory of local black-owned businesses that users can find to support"
        tech={['React', 'React Native', 'HTML', 'CSS', 'Open Source']}
        website="https://spicygreenbook.org/"
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="The Sylar Project (contributed)"
        image="/static/projects/sylar.jpg"
        repo="https://github.com/Rahat-ch/The_Sylar_Project"
        description="A NextJS open source project with the goal to help people locate mental health resources quickly in their local area."
        tech={['NextJS', 'React', 'Node', 'HTML', 'CSS', 'Open Source']}
        website="https://the-sylar-project-6avzk.ondigitalocean.app/"
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="Flask Store (contributed)"
        image="/static/projects/hacktober.jpg"
        repo="https://github.com/gabrielhicks/flask-online-store"
        description="A Python / Flask open source e-commerce store management and order placing system created for Hacktoberfest"
        tech={['Python', 'SQLAlchemy', 'Flask', 'OAuth', 'Open Source']}
        website="https://github.com/gabrielhicks/flask-online-store"
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="O-FISH (contributed)"
        image="/static/projects/hacktober.jpg"
        repo="https://github.com/gabrielhicks/wildaid.github.io"
        description="O-FISH is an open source multi-platform application that enables officers to browse and record boarding report data from their mobile devices"
        tech={['HTML', 'Open Source']}
        website="https://wildaid.github.io/"
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="Personal Portfolio v2"
        image="/static/projects/portfoliov2.jpg"
        repo="https://github.com/gabrielhicks/gabrielhicks.dev"
        description="This is the current state of my portfolio. It serves as my sandbox where I can try out and implement new technologies."
        tech={[
          'React',
          'TypeScript',
          'Next.js',
          'Chakra-UI',
          'MDX',
          'Prism.js',
          'HTML',
          'CSS',
          'rehype',
          'Google Analytics'
        ]}
        website="https://gabrielhicks.dev"
      />
      <Project
        frontend={false}
        backend={false}
        video={false}
        title="Personal Portfolio"
        image="/static/projects/portfoliov1.jpg"
        repo="https://github.com/gabrielhicks/portfolio"
        description="The first iteration of my personal portfolio"
        tech={['React', 'Redux', 'HTML', 'CSS', 'styled-components']}
        website="https://gabrielhicks.netlify.app"
      />
    </>
  );
};

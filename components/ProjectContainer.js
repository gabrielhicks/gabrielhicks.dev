import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => (
  <>
    <Project
      image="/static/projects/tutorialheaven.png"
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
      description="Web forum with live chat designed to encourage new developers to collaborate on projects."
    />

    <Project
      image="/static/projects/rplants.png"
      website="https://rplants.netlify.app/"
      title="rPlants"
      video="https://youtu.be/U8aKwmJFAq4"
      frontend="https://github.com/gabrielhicks/rplants-front"
      backend="https://github.com/gabrielhicks/rplants-back"
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
      image="/static/projects/synthwave.png"
      website="https://synthwavejs.herokuapp.com/"
      video="https://youtu.be/HsbjB8s-tSU"
      frontend="https://github.com/gabrielhicks/synthwave-frontend"
      backend="https://github.com/gabrielhicks/synthwaveheroku"
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
      image="/static/projects/youplay.png"
      video="https://youtu.be/w7D92edjc4I"
      repo="https://github.com/gabrielhicks/YouPlay_postgreSQL"
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
      website="https://you-play-heroku.herokuapp.com/"
    />
    <Project
      title="Literally Just Vibing"
      image="/static/projects/vibing.png"
      repo="https://github.com/gabrielhicks/literallyjustvibing"
      description="A Ruby CLI application that generates playlists based off a users mood via Spotify API and data analysis by Michael Nuzzolo"
      tech={['Ruby', 'Spotify API']}
    />

    <Project
      title="Spicy Green Book (contributed)"
      image="/static/projects/sgb.png"
      repo="https://github.com/spicygreenbook/greenbook-app"
      description="An open source directory of local black-owned businesses that users can find to support"
      tech={['React', 'React Native', 'HTML', 'CSS', 'Open Source']}
      website="https://spicygreenbook.org/"
    />

    <Project
      title="The Sylar Project (contributed)"
      image="/static/projects/sylar.png"
      repo="https://github.com/Rahat-ch/The_Sylar_Project"
      description="A NextJS open source project with the goal to help people locate mental health resources quickly in their local area."
      tech={['NextJS', 'React', 'Node', 'HTML', 'CSS', 'Open Source']}
      website="https://the-sylar-project-6avzk.ondigitalocean.app/"
    />

    <Project
      title="Flask Store (contributed)"
      image="/static/projects/hacktober.png"
      repo="https://github.com/gabrielhicks/flask-online-store"
      description="A Python / Flask open source e-commerce store management and order placing system created for Hacktoberfest"
      tech={['Python', 'SQLAlchemy', 'Flask', 'OAuth', 'Open Source']}
      website="https://github.com/gabrielhicks/flask-online-store"
    />

    <Project
      title="O-FISH (contributed)"
      image="/static/projects/hacktober.png"
      repo="https://github.com/gabrielhicks/wildaid.github.io"
      description="O-FISH is an open source multi-platform application that enables officers to browse and record boarding report data from their mobile devices"
      tech={['HTML', 'Open Source']}
      website="https://wildaid.github.io/"
    />

    <Project
      title="Personal Portfolio v2"
      image="/static/projects/portfoliov2.png"
      repo="https://github.com/gabrielhicks/portfolio"
      description="The first iteration of my personal portfolio"
      tech={[
        'React',
        'Next.js',
        'Chakra-UI',
        'MDX',
        'Prism.js',
        'HTML',
        'CSS',
        'emotion',
        'rehype',
        'Google Analytics'
      ]}
      website="https://gabrielhicks.dev"
    />

    <Project
      title="Personal Portfolio"
      image="/static/projects/portfoliov1.png"
      repo="https://github.com/gabrielhicks/portfolio"
      description="The first iteration of my personal portfolio"
      tech={['React', 'Redux', 'HTML', 'CSS', 'styled-components']}
      website="https://gabrielhicks.netlify.app"
    />
  </>
);

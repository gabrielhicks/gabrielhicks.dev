import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => (
  <>
    <Project
      image="https://i.ibb.co/2P838j6/thcol.webp"
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
      image="https://i.ibb.co/p2xRs3c/rplantscol.webp"
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
      image="https://i.ibb.co/Jm4bFgd/synthcol.webp"
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
      image="https://i.ibb.co/nCpYHGH/youplaycol.webp"
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
      image="https://i.ibb.co/982482L/litcol.webp"
      repo="https://github.com/gabrielhicks/literallyjustvibing"
      description="A Ruby CLI application that generates playlists based off a users mood via Spotify API and data analysis by Michael Nuzzolo"
      tech={['Ruby', 'Spotify API']}
    />

    <Project
      title="Spicy Green Book (contributed)"
      image="https://i.ibb.co/HPRF1b8/spicecol.webp"
      repo="https://github.com/spicygreenbook/greenbook-app"
      description="Open Source Contribution - A directory of local black-owned businesses that users can find to support"
      tech={['React', 'React Native', 'HTML', 'CSS']}
      website="https://spicygreenbook.org/"
    />

    <Project
      title="The Sylar Project (contributed)"
      image="https://i.ibb.co/Kbk5Z3Y/thesylarproject.webp"
      repo="https://github.com/Rahat-ch/The_Sylar_Project"
      description="A NextJS Open Source project with the goal to help people locate mental health resources quickly in their local area."
      tech={['NextJS', 'React', 'Node', 'HTML', 'CSS']}
      website="https://the-sylar-project-6avzk.ondigitalocean.app/"
    />

    <Project
      title="Flask Store (contributed)"
      image="https://i.ibb.co/PNMYgzM/hacktoberfest.webp"
      repo="https://github.com/gabrielhicks/flask-online-store"
      description="A Python / Flask e-commerce store management and order placing system."
      tech={['Python', 'SQLAlchemy', 'Flask', 'Github OAuth']}
      website="https://github.com/gabrielhicks/flask-online-store"
    />

    <Project
      title="O-FISH (contributed)"
      image="https://i.ibb.co/PNMYgzM/hacktoberfest.webp"
      repo="https://github.com/gabrielhicks/wildaid.github.io"
      description="O-FISH is a multi-platform application that enables officers to browse and record boarding report data from their mobile devices"
      tech={['HTML']}
      website="https://wildaid.github.io/"
    />

    <Project
      title="Personal Portfolio"
      image="https://i.ibb.co/HP6KzDv/portfoliov1.webp"
      repo="https://github.com/gabrielhicks/portfolio"
      description="The first iteration of my personal portfolio"
      tech={['React', 'Redux', 'HTML', 'CSS', 'styled-components']}
      website="https://gabrielhicks.netlify.app"
    />
  </>
);

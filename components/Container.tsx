import React, { ReactNode } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from './Header';

type Props = {
  children: ReactNode;
  type: string;
  description: string;
  title: string;
  image: string;
  date: string;
};

export const Container = (props: Props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };

  const router = useRouter();
  const meta = {
    title: 'Gabriel Hicks - Software Engineer, Full Stack Developer',
    description:
      'Gabriel Hicks is a software engineer who specializes in building applications and websites using the latest technologies.',
    image: 'https://gabrielhicks.dev/og.png',
    type: 'website'
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gabrielhicks.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gabriel Hicks" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gabrielhicksdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <Header />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </>
  );
};

import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

import SEO from '../../next-seo.config';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true
        }}
      >
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default MyApp;

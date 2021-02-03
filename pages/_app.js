import React from 'react';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';
// import Router from 'next/router';

import MDXComponents from '../components/MDXComponents';
import theme from '../theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
// import * as gtag from '../lib/gtag';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
        `}
      />
      {children}
    </>
  );
};

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false
        }}
      >
        <GlobalStyle>
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default MyApp;

import React, { ReactNode } from 'react';
import { AppProps } from 'next/app';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';

import MDXComponents from '../components/MDXComponents';
import theme from '../theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';

interface ChakraProps {
  children: ReactNode;
}

const GlobalStyle = ({ children }: ChakraProps) => {
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

const MyApp = ({ Component, pageProps }: AppProps) => {
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

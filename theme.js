// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable node/no-extraneous-import */
import React from 'react';
import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

const theme = extendTheme({
  colors: {
    black: '#16161D'
  },
  fonts,
  breakpoints,
  icons: {}
});

export default theme;

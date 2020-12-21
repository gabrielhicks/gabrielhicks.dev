/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable objects/no-object-properties-first-line */
/* eslint-disable objects/no-object-properties-last-line */
import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'gray.50', dark: 'gray.900' };

  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

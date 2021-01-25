import { Box } from '@chakra-ui/react';
import React from 'react';

export const BlockQuote = (props) => {
  return (
    <Box
      as="blockquote"
      paddingLeft="23px"
      boxShadow="inset 3px 0 0 0 rgba(41, 41, 41, 1);"
      {...props}
    />
  );
};

import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BlockQuote = (props: Props) => {
  return (
    <Box
      as="blockquote"
      paddingLeft="23px"
      boxShadow="inset 3px 0 0 0 rgba(41, 41, 41, 1);"
      {...props}
    />
  );
};

import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

export const Main = (props) => (
  <SimpleGrid columns={[1, 2, 3]} spacing={2} {...props} />
);

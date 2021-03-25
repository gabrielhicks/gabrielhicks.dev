import React, { ReactNode } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const Main = (props: Props) => <SimpleGrid {...props} />;

import { Avatar, Flex, Box, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  date: string;
  readingTime: string;
};

export const BlogAvatar = ({ date, readingTime }: Props) => {
  return (
    <Flex mt="5">
      <Avatar src="/static/avatar.jpg" />
      <Box ml="3">
        <Text fontWeight="600">
          Gabriel Hicks
          {/* <Badge ml="1" colorScheme="green">
                  New
                </Badge> */}
        </Text>
        <Text fontSize="sm">
          {' '}
          {date} - {readingTime}
        </Text>
      </Box>
    </Flex>
  );
};

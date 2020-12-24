import React from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  ChakraLink as Link
} from '@chakra-ui/react';

export const Project = ({ project }) => {
  const property = {
    imageAlt: 'Rear view of modern home with pool'
  };

  return (
    <>
      <Box
        mx="2"
        my="2"
        maxW="sm"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
      >
        <Image width="sm" src={project.image2} alt={property.imageAlt} />

        <Box p="6">
          <Box d="" alignItems="baseline">
            {project.tech.map((each) => (
              <Badge
                key={project.id}
                borderRadius="full"
                px="2"
                colorScheme="teal"
              >
                {each}
              </Badge>
            ))}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {project.name}
          </Box>

          <Box>{project.description}</Box>
        </Box>
        <Box
          d="flex"
          my="2"
          mx="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Button
            component={Link}
            as="a"
            target="_blank"
            rel="noreferrer"
            href={project.url}
          >
            Live
          </Button>
          <Button
            component={Link}
            as="a"
            target="_blank"
            rel="noreferrer"
            href={project.videoUrl}
          >
            Video
          </Button>
          <Button
            component={Link}
            as="a"
            target="_blank"
            rel="noreferrer"
            href={project.front}
          >
            Frontend
          </Button>
          <Button
            component={Link}
            as="a"
            target="_blank"
            rel="noreferrer"
            href={project.back}
          >
            Backend
          </Button>
        </Box>
      </Box>
    </>
  );
};

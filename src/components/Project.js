import React from 'react';
import {
  Box,
  Image,
  Badge,
  Button,
  ChakraLink as Link,
  Divider
} from '@chakra-ui/react';
import { Airplayvideo, Youtube, Github } from '@icons-pack/react-simple-icons';

export const Project = ({ project }) => {
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
        <Image width="sm" src={project.image2} alt={project.name} />
        <Box
          d="flex"
          my="2"
          mx="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {project.videoUrl !== '' ? (
            <Button
              colorScheme="gray"
              leftIcon={<Youtube />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={project.videoUrl}
            >
              Video
            </Button>
          ) : null}

          {project.url !== '' ? (
            <Button
              colorScheme="gray"
              leftIcon={<Airplayvideo />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={project.url}
            >
              Live
            </Button>
          ) : null}

          {project.front !== '' ? (
            <Button
              colorScheme="gray"
              leftIcon={<Github />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={project.front}
            >
              Front
            </Button>
          ) : null}

          {project.back !== '' ? (
            <Button
              colorScheme="gray"
              leftIcon={<Github />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={project.back}
            >
              Back
            </Button>
          ) : null}
        </Box>

        <Box p="6" pt="0">
          <Box pt="0" fontWeight="bold" as="h3" lineHeight="tight">
            {project.name}
            <Divider orientation="horizontal" />
          </Box>

          <Box d="flex-end" pb="2" alignItems="baseline">
            {project.tech.map((each) => (
              <Badge
                key={each}
                borderRadius="full"
                px="2"
                mr="2px"
                fontSize="0.6em"
                colorScheme="green"
              >
                {each}
              </Badge>
            ))}
          </Box>

          <Box>{project.description}</Box>
        </Box>
      </Box>
    </>
  );
};

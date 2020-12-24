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

export const Project = ({
  image,
  title,
  video,
  frontend,
  backend,
  repo,
  tech,
  description,
  website
}) => {
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
        <Image width="sm" src={image} alt={title} />
        <Box
          d="flex"
          my="2"
          mx="2"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {video ? (
            <Button
              colorScheme="gray"
              leftIcon={<Youtube />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={video}
            >
              Video
            </Button>
          ) : null}

          {website ? (
            <Button
              colorScheme="gray"
              leftIcon={<Airplayvideo />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={website}
            >
              Live
            </Button>
          ) : null}

          {frontend ? (
            <Button
              colorScheme="gray"
              leftIcon={<Github />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={frontend}
            >
              Front
            </Button>
          ) : null}

          {backend ? (
            <Button
              colorScheme="gray"
              leftIcon={<Github />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={backend}
            >
              Back
            </Button>
          ) : null}

          {repo ? (
            <Button
              colorScheme="gray"
              leftIcon={<Github />}
              component={Link}
              as="a"
              target="_blank"
              rel="noreferrer"
              href={repo}
            >
              Repo
            </Button>
          ) : null}
        </Box>

        <Box p="6" pt="0">
          <Box pt="0" fontWeight="bold" as="h3" lineHeight="tight">
            {title}
            <Divider orientation="horizontal" />
          </Box>

          <Box d="flex-end" pb="2" alignItems="baseline">
            {tech.map((each) => (
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

          <Box>{description}</Box>
        </Box>
      </Box>
    </>
  );
};

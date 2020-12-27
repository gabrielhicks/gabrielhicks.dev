import React from 'react';
import Image from 'next/image';
import {
  Box,
  Badge,
  Button,
  Divider,
  ChakraLink as Link
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
        <Image width={3360} height={1864} src={image} alt={title} />
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
              alt="Opens in a new window"
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
              alt="Opens in a new window"
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
              alt="Opens in a new window"
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
              alt="Opens in a new window"
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
              alt="Opens in a new window"
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
            <Divider role="separator" orientation="horizontal" />
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

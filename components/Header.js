import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Stack,
  ChakraLink as Link,
  MenuDivider,
  MenuGroup
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  ChevronDownIcon,
  EmailIcon,
  ExternalLinkIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';

export const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const menuToggle = useColorModeValue('black', 'white');

  return (
    <>
      <IconButton
        position="fixed"
        top="1rem"
        right="1rem"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
      <Stack
        direction="row"
        position="fixed"
        top="1rem"
        left="1rem"
        spacing={1}
        align="center"
      >
        <NextLink href="/" passHref>
          <Button variant="outline" colorScheme="green">
            Home
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button variant="outline" colorScheme="green">
            Blog
          </Button>
        </NextLink>
        <Menu>
          <MenuButton
            colorScheme="green"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            More
          </MenuButton>
          <MenuList color={menuToggle}>
            <MenuGroup title="Social">
              <MenuItem
                component={Link}
                as="a"
                alt="Opens in a new window"
                target="_blank"
                rel="noreferrer"
                href={'https://www.linkedin.com/in/gabrieljhicks/'}
                icon={<ExternalLinkIcon />}
              >
                LinkedIn
              </MenuItem>
              <MenuItem
                component={Link}
                as="a"
                alt="Opens in a new window"
                target="_blank"
                rel="noreferrer"
                href={'https://github.com/gabrielhicks/'}
                icon={<ExternalLinkIcon />}
              >
                GitHub
              </MenuItem>
              <MenuItem
                component={Link}
                as="a"
                alt="Opens in a new window"
                target="_blank"
                rel="noreferrer"
                href={'https://twitter.com/gabrielhicksdev'}
                icon={<ExternalLinkIcon />}
              >
                Twitter
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Contact">
              <MenuItem
                component={Link}
                as="a"
                alt="Opens in a new window"
                target="_blank"
                rel="noreferrer"
                href={'https://gabrielhicks.dev/HicksResume.pdf'}
                icon={<ExternalLinkIcon />}
              >
                Resume
              </MenuItem>
              <MenuItem
                component={Link}
                as="a"
                alt="Opens in a new window"
                target="_blank"
                rel="noreferrer"
                href={'mailto:me@gabrielhicks.dev'}
                icon={<EmailIcon />}
              >
                Email
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Stack>
    </>
  );
};

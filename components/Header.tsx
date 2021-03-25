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
  Link,
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
      <Stack
        as="nav"
        height="4.5rem"
        zIndex="10"
        width="100%"
        position="fixed"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
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
                  as={Link}
                  alt="Opens LinkedIn in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://www.linkedin.com/in/gabrieljhicks/'}
                  icon={<ExternalLinkIcon />}
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens GitHub in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://github.com/gabrielhicks/'}
                  icon={<ExternalLinkIcon />}
                >
                  GitHub
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens Twitter in a new window"
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
                  as={Link}
                  alt="Opens Resume in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={'https://gabrielhicks.dev/HicksResume.pdf'}
                  icon={<ExternalLinkIcon />}
                >
                  Resume
                </MenuItem>
                <MenuItem
                  as={Link}
                  alt="Opens Email in a new window"
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
          <IconButton
            position="fixed"
            top="1rem"
            right="1rem"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Stack>
      </Stack>
    </>
  );
};

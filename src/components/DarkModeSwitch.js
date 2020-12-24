import React from 'react';
import {
  useColorMode,
  IconButton,
  Button,
  Stack,
  ChakraLink as Link
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      {/* <Switch
        position="fixed"
        top="1.5rem"
        right="1rem"
        colorScheme="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      /> */}
      {isDark ? (
        <IconButton
          position="fixed"
          variant="ghost"
          top="1rem"
          right="1rem"
          // colorScheme="green"
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={<SunIcon />}
        />
      ) : (
        <IconButton
          position="fixed"
          top="1rem"
          variant="ghost"
          right="1rem"
          // colorScheme="green"
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={<MoonIcon />}
        />
      )}
      <Stack
        direction="row"
        position="fixed"
        top="1rem"
        left="1rem"
        spacing={1}
        align="center"
      >
        <Button
          variant="outline"
          colorScheme="green"
          component={Link}
          as="a"
          target="_blank"
          rel="noreferrer"
          href={'https://pdfhost.io/v/6MxCSbMTj_HicksResume2020_LaTeXpdf.pdf'}
        >
          Resume
        </Button>
        <Button
          variant="outline"
          colorScheme="green"
          component={Link}
          as="a"
          target="_blank"
          rel="noreferrer"
          href={'https://www.linkedin.com/in/gabrieljhicks/'}
        >
          LinkedIn
        </Button>
        <Button
          variant="outline"
          colorScheme="green"
          component={Link}
          as="a"
          target="_blank"
          rel="noreferrer"
          href={'https://github.com/gabrielhicks/'}
        >
          GitHub
        </Button>
      </Stack>
    </>
  );
};

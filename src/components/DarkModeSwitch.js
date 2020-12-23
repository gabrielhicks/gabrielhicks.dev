import React from 'react';
import { useColorMode, Switch, Button, Stack } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <Switch
        position="fixed"
        bottom="1.5rem"
        left="1rem"
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <Stack
        direction="row"
        position="fixed"
        top="1rem"
        left="1rem"
        spacing={1}
        align="center"
      >
        <Button color="green">About</Button>
        <Button color="green">Projects</Button>
        <Button color="green">Blog</Button>
      </Stack>
    </>
  );
};

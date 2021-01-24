import { useForm } from 'react-hook-form';
import React from 'react';
import { FormLabel, FormControl, Input, Button } from '@chakra-ui/react';

export const Contact = () => {
  const { handleSubmit, formState } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input name="name" placeholder="name" />
      </FormControl>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

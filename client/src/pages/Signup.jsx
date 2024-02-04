import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box mt="4" mx="auto" maxW="md">
      <Heading as="h2" mb="4" textAlign="center">
        Sign Up
      </Heading>
      {data ? (
        <Box>
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        </Box>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <FormControl mb="4">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            width="full"
            mt="4"
            isLoading={false} // You can set this to true while waiting for the mutation to complete
          >
            Submit
          </Button>
        </form>
      )}

      {error && (
        <Box mt="4" p="3" bg="danger.500" color="white">
          {error.message}
        </Box>
      )}
    </Box>
  );
};

export default Signup;

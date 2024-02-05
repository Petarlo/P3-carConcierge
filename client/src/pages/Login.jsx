import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Box mt="4" mx="auto" maxW="md" bg='gray.500' color='white' borderWidth="1px" borderRadius="md" boxShadow="md">
      <Heading as="h2" mb="4" textAlign="center">
        Login
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

export default Login;

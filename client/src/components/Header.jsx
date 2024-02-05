import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Box, Flex, Heading, Button, ButtonGroup } from '@chakra-ui/react';

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box
      as="header"
      bg="gray.500"
      color="white"
      mb="4"
      py="3"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Flex
        container
        maxW="container.lg"
        justify="space-between"
        align="center"
      >
        <Box>
          <Link to="/" textDecoration="none">
            <Heading as="h1" fontSize="2xl" m="0">
              carConcierge
            </Heading>
          </Link>
          <Box m="0">The easy way to find your next car!</Box>
        </Box>

        <ButtonGroup>
          <Link to="/blog">
            <Button size="lg" colorScheme="teal" m="2">
              Blog
            </Button>
          </Link>
          <Link to="/aboutus">
            <Button size="lg" colorScheme="teal" m="2">
              About Us
            </Button>
          </Link>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me">
                <Button size="lg" colorScheme="teal" m="2">
                  {Auth.getProfile().data.username}'s garage
                </Button>
              </Link>
              <Button size="lg" colorScheme="teal" m="2" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button size="lg" colorScheme="teal" m="2">
                  Signup
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" colorScheme="white" m="2">
                  Login
                </Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Header;


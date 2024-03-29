import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Box, Flex, Heading, Button, ButtonGroup, Image, Spacer } from '@chakra-ui/react';

import LogoImage from '../../images/Logo-removebg-preview.png';
function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Flex
      as="header"
      bg="gray.500"
      color="white"
      mb="4"
      p="2"
      minWidth="max-content" alignItems="centre"
      px="10"
      >
        <Box>
          <Link to="/" textDecoration="none">
          <Image src={LogoImage} alt="Logo" boxSize="50px" mr="3" />
            <Heading as="h1" fontSize="2xl" m="0">
              carConcierge
            </Heading>
          </Link>
          <Box m="0">The easy way to find your next car!</Box>
        </Box>
      <Spacer />
        <ButtonGroup pt="5" gap="2">
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
  );
}

export default Header;
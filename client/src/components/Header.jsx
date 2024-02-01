import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { Flex, Box, Heading, Text, Button, Spacer, ButtonGroup
 } from "@chakra-ui/react";

function Header() {
  const logout = (event) => {
    event.preventDefault();
     Auth.logout();
  };
  return (
    <Box
          as="header"
          bg="grey.500"
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
                  Tech Thoughts
                </Heading>
              </Link>
              <Box m="0">Get into the mind of a programmer.</Box>
            </Box>
            <Box>
              {Auth.loggedIn() ? (
                <>
                  <Link to="/me">
                    <Button size="lg" colorScheme="teal" m="2">
                      {Auth.getProfile().data.username}'s profile
                    </Button>
                  </Link>
                  <Button size="lg" colorScheme="white" m="2" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button size="lg" colorScheme="teal" m="2">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="lg" colorScheme="white" m="2">
                      Signup
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Flex>
        </Box>
      );

//          return (
//     <Flex p="10px">
//       <Box p='2' bg='grey.500'>
//         <Heading as ="h1" size='md'> carConcierge</Heading>
//       </Box>
//       <Spacer />
//         <ButtonGroup gap ='2'>
//             <Button variant="outline" colorScheme="teal">Home</Button>
//             <Button variant="outline" colorScheme="teal">About Us</Button>
//             <Button variant="outline" colorScheme="teal">Contact Us</Button>
//         </ButtonGroup>
//     </Flex>
//   )
}

export default Header;

import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Comment from '../components/Comment'; 

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Box bgColor='gray.500' color='white'>
        <Heading>You need to be logged in to see this.</Heading>
        <Text>
          Use the navigation links above to sign up or log in!
        </Text>
      </Box>
    );
  }

  return (
    <Box bgColor='gray.500' color='white'>
      <Heading mb={3}>
        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
      </Heading>

      <Box mb={5}>
        {/* Display user's comments */}
        <Comment comments={user.comments} />
      </Box>

      {!userParam && (
        <Box mb={3} p={3} border="1px dotted #1a1a1a">
        </Box>
      )}
    </Box>
  );
};

export default Profile;

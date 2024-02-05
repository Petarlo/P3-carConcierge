import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Comment = ({ comment }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" bg="gray.500" color='white'>
      <Text fontSize="sm" mb={2} fontWeight="bold" color='white'>
        Comment #{comment.id}
      </Text>
      <Text fontSize="md">{comment.text}</Text>
    </Box>
  );
};

export default Comment;
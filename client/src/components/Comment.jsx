import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Comment = ({ comment, onRemove }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" bg="gray.500" color='white'>
      <Text fontSize="sm" mb={2} fontWeight="bold" color='white'>
        Comment #{comment.id}
      </Text>
      <Text fontSize="md">{comment.text}</Text>
      <Button onClick={onRemove} colorScheme="red" size="sm" mt={2}>
        Remove Comment
      </Button>
    </Box>
  );
};

export default Comment;

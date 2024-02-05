import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Comment from './Comment'; // Import the Comment component

const BlogPost = ({ post }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" bgColor='gray.500' color='white'>
      <Heading as="h2" size="lg" mb={2}>
        {post.title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={4}>
        Posted on {post.date} by {post.author}
      </Text>
      <Text fontSize="md" mb={4}>
        {post.content}
      </Text>
      <Box mt={4}>
        <Heading as="h3" size="md" mb={2}>
          Comments
        </Heading>
        {post.comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogPost;

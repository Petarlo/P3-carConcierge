import React from 'react';
import {
  Box,
  Text,
  Heading,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const BlogPost = ({ title, content, author, date }) => {
  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Add your logic to handle comment submission
  };

  return (
    <Box mb="4">
      <Heading as="h2" mb="2">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb="2">
        {`By ${author} on ${date}`}
      </Text>
      <Divider mb="2" />
      <Text>{content}</Text>

      {/* Comment Box */}
      <Box mt="4">
        <Heading as="h3" mb="2" fontSize="lg">
          Leave a Comment
        </Heading>
        <form onSubmit={handleSubmitComment}>
          <FormControl mb="4">
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <Input type="text" id="name" placeholder="Enter your name" />
          </FormControl>
          <FormControl mb="4">
            <FormLabel htmlFor="comment">Your Comment</FormLabel>
            <Textarea
              id="comment"
              placeholder="Enter your comment"
              rows={4}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Submit Comment
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BlogPost;

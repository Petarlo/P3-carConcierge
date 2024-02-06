import React, { useState } from 'react';
import { Box, Heading, Text, Input, Button } from '@chakra-ui/react';
import Comment from './Comment';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, REMOVE_COMMENT } from '../utils/mutations';

const BlogPost = ({ post }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const [addCommentMutation] = useMutation(ADD_COMMENT);
  const [removeCommentMutation] = useMutation(REMOVE_COMMENT);

  const handleCommentSubmit = async () => {
    try {
      // Assuming you have a function to submit the comment to a server or update state
      // Use the addCommentMutation to send a mutation to add a new comment
      await addCommentMutation({
        variables: {
          text: newComment,
          author: 'YourAuthor', // Replace with the actual author data
        },
      });

      // Reset the comment input after successful submission
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleRemoveComment = async (commentId) => {
    try {
      // Use the removeCommentMutation to send a mutation to remove a comment
      await removeCommentMutation({
        variables: {
          blogid: post.id, // Assuming the blogid is the identifier for the blog post
        },
      });
    } catch (error) {
      console.error('Error removing comment:', error);
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} shadow="md" bgColor='gray.500' color='white'>
      {/* ... rest of the component */}

      {/* Comment input and submit button */}
      <Input
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Type your comment..."
        mb={2}
      />
      <Button onClick={handleCommentSubmit} colorScheme="teal">
        Add Comment
      </Button>

      {/* Render existing comments */}
      {post.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} onRemove={() => handleRemoveComment(comment.id)} />
      ))}
    </Box>
  );
};

export default BlogPost;

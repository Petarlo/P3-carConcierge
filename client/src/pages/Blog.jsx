import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Container, Stack } from '@chakra-ui/react';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';
import { QUERY_BLOG } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Blog = () => {
  // Assume you have some state to manage your blog posts and comments
  const [blogPosts, setBlogPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // Fetch blog posts and comments on component mount
  useEffect(() => {
    // Your logic to fetch blog posts and comments goes here
    // For simplicity, I'll use dummy data

    const dummyBlogPosts = [
      { id: 1, title: 'First Blog Post', content: 'Lorem ipsum...' },
      { id: 2, title: 'Second Blog Post', content: 'Dolor sit amet...' },
      // Add more blog posts as needed
    ];

    const dummyComments = [
      { id: 1, postId: 1, text: 'Great post!' },
      { id: 2, postId: 1, text: 'I learned a lot.' },
      // Add more comments as needed
    ];

    setBlogPosts(dummyBlogPosts);
    setComments(dummyComments);
  }, []);

  return (
    <Container maxW="container.lg" mt={8}>
      <Heading as="h1" mb={4} color='white'>
        Blog
      </Heading>

      {/* Render blog posts */}
      <Stack spacing={6}>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </Stack>

      <Heading as="h2" mt={8} mb={4} color='white'>
        Comments
      </Heading>

      {/* Render comments */}
      <Stack spacing={4}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Container>
  );
};

export default Blog;
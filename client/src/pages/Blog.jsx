import { useQuery } from '@apollo/client';
import BlogPost from '../components/BlogPost';
// import CommentForm from '../components/CommentForm';
import { Box, Flex, Spinner } from '@chakra-ui/react';

import { QUERY_BLOG } from '../utils/queries';

const Blog = () => {
  const { loading, data } = useQuery(QUERY_BLOG);
  const blogs = data?.blogs || [];

  return (
    <Box>
      <Flex direction="column" align="center" justify="center">
        <Box
          maxW="600px"
          mb="4"
          p="4"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
        >
          {/* Use BlogPost component here */}
          <BlogPost />
        </Box>
        <Box maxW="600px">
          {/* {loading ? (
            <Flex align="center" justify="center" h="200px">
              <Spinner size="xl" />
            </Flex>

          )} */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Blog;

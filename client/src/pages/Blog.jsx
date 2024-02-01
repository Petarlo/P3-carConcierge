import { useQuery } from '@apollo/client';

import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';

import { QUERY_BLOG } from '../utils/queries';

const BlogPost = () => {
  const { loading, data } = useQuery(QUERY_BLOG);
  const blogs = data?.blogs || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <BlogPost />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CommentForm
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
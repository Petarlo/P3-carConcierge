import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      blogComments {
        _id
        blogText
        createdAt
      }
    }
  }
`;

export const QUERY_BLOG = gql`
  query getBlogs {
    blogs {
      _id
      blogText
      blogAuthor
      createdAt
    }
  }
`;

export const QUERY_DONATION = gql`
  query donation($session: ID!) {
    donation(session: $session) {
      session
    }
  }
  `;

export const QUERY_SINGLE_BLOG = gql`
  query getSingleBlog($blogId: ID!) {
    blog(blogId: $blogId) {
      _id
      blogText
      blogAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedCars {
        _id
        make
        model
        dateSaved
      }
      blogComments {
        _id
        blogText
        createdAt
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query checkout($products: [ProductInput]!) {
    checkout(products: $products) {
      session
    }
  }
  `;

export const SEARCHCARS = gql`
  query searchCars($make: String, $model: String, $year: Int, $shape: String, $listprice: Float) {
    searchCars(make: $make, model: $model, year: $year, shape: $shape, listprice: $listprice) {
      _id
      make
      model
      year
      shape
      listprice
    }
  }
`;
const typeDefs = `
type Car {
    id: ID!
    make: String
    model: String
    year: Int
    shape: String
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    cars: [Car]
}

type Blog {
    _id: ID
    title: String
    author: String
    content: String
    createdAt: String
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Donation {
    session: ID
}

type Auth {
    token: ID!
    user: User
}

type Query {
    user: [User]
    cars: [Car]
    car(id: ID!): Car
    searchCars(make: String, model: String, year: Int, shape: String): [Car]
    comment(id: ID!): Comment
    donation(session: ID!): Donation
    blog(id: ID!): Blog
}
      
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addComment(text: String!, author: String!): Blog
    removeComment(blogid: ID!): Blog
    checkout(products: [ProductInput]): Donation
}

input ProductInput {
    _id: ID!
    name: String!
    price: Float
}
`;

module.exports = typeDefs;
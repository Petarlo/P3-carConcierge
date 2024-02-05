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
    user: User
    cars: [Car]
    car(id: ID!): Car
    searchCars(make: String, model: String, year: Int, shape: String): [Car]
    comment(id: ID!): Comment
    donation(session: ID!): Donation
}
      
type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addComment(text: String!, author: String!): Comment
    removeComment(id: ID!): Comment
}
`;

module.exports = typeDefs;
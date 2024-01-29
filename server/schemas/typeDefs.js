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
    firstName: String
    lastName: String
    email: String
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
}
      
type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
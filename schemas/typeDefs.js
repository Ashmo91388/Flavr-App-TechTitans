const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    username: String
  }
  type Review {
    userName: String
    title: String
    content: String
    rating: Int
  }

  type Restaurant {
    name: String!
    cuisine: String
    image: String
    reviews: [Review]
    totalRating: Int
  }
  type Query {
    user(username: String!): User
    restaurants: [Restaurant]
    restaurant(_id: ID!): Restaurant
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addReview(
      restaurantId: ID!
      title: String
      content: String
      rating: Int!
      userName: String!
    ): Restaurant
    removeReview(
        reviewId: ID!
        restaurantId: ID!
        ): Restaurant 
  }
`;

module.exports = typeDefs;


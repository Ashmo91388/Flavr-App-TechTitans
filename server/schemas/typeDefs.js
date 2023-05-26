const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    username: String
    token: ID
  }
  type Review {
    userName: String
    title: String
    content: String
    rating: Int
    _id: ID
  }

  type Restaurant {
    name: String!
    cuisine: String
    image: String
    reviews: [Review]
    totalRating: Int
    _id: ID 
  }
  type Query {
    user(username: String!): User
    restaurants: [Restaurant]
    restaurant(_id: ID!): Restaurant
  }
  type Auth {
    token: ID! 
    user: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): User
    addReview(
      restaurantId: ID!
      title: String!
      content: String!
      rating: Int!
      userName: String!
    ): Restaurant
    addRestaurant(
      name: String!
      cuisine: String
      image: String
      totalRating: Float
    ): Restaurant
    removeReview(
        reviewId: ID!
        restaurantId: ID!
        ): Restaurant 
  }
`;

module.exports = typeDefs;


const { AuthenticationError } = require('apollo-server-express');
const User = require("../models/userSchema")
const Restaurant = require("../models/restaurantSchema")

const resolvers = {
    Query: {
      user: async (parent, { username }) => {
        return User.findOne({ username })
      },
      restaurants: async (parent, {}) => {
        return Restaurant.find({})
      },
      restaurant: async (parent, {_id}) => {
        return Restaurant.findOne({ _id: _id });
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        return user;
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
  
        return user;
      },
      addReview: async (parent, { restaurantId, title, content, rating, userName }) => {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, {
            $push: {
                reviews: {
                    title, content, rating, userName
                }
            },
           
        },
        {
            new: true
        });
  
        return updatedRestaurant;
      },
      
      removeReview: async (parent, { reviewId, restaurantId }) => {
        return Restaurant.findOneAndUpdate(
          { _id: restaurantId },
          { $pull: { reviews: { _id: reviewId } } },
          { new: true }
        );
      },
    },
  };
  
  module.exports = resolvers;
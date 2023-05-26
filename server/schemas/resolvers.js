const { AuthenticationError } = require('apollo-server-express');
const User = require("../models/userSchema")
const Restaurant = require("../models/restaurantSchema")
const {signToken} = require ('../utils/auth')

const resolvers = {
    Query: {
      user: async (parent, { username }) => {
        const user = await User.findOne({ username })
        return user 
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
        const token = signToken(user);
        
        return {token, user};
      },
      addRestaurant: async (parent, { name, cuisine, image, totalRating }) => {
        const restaurant = await Restaurant.create({ name, cuisine, image, totalRating  });
        return restaurant;
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
  
        const token = signToken(user);
        user.token=token
        return user;
      },
      addReview: async (parent, { restaurantId, title, content, rating, userName }) => {
        const restaurant = await Restaurant.findById(restaurantId)
        let newRating;
        if (!restaurant.totalRating){
          newRating = rating   
        } else {
          let numReviews = restaurant.reviews.length
          let sumOfratings = numReviews*restaurant.totalRating
          sumOfratings += rating 
          newRating = sumOfratings/(numReviews + 1)
        }
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, {
          totalRating: newRating,
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
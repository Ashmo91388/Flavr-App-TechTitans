const {Schema, model} = require('mongoose');

const reviewSchema = new Schema(
    {
       userName: {
        type: String,
        required: true
       },
       title: {
        type: String,
       },
       content: {
        type: String,
       },
       rating: {
        type: Number,
        required: true,
        min:1,
        max:10
       },
    }
)
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: String,
    image: String,
    reviews: [reviewSchema],
    totalRating: Number
})


const Restaurant = model('Restaurant', restaurantSchema);


module.exports = Restaurant;
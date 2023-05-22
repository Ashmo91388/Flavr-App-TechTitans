const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true


    },
    password: String
})


const User = model('User', userSchema);


module.exports = User;
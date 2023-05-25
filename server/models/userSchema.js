const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: String
})

userSchema.methods.isCorrectPassword = async function (password) {
    return password === this.password;
  };

const User = model('User', userSchema);


module.exports = User;
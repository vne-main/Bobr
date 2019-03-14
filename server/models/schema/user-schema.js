const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    token: String,
    login: String,
    email: String,
    password: String,
    status: {type: String, default: ""},
    gender: {type: String, default: "другой"},
    photo: {type: String, default: "https://storage.googleapis.com/vasenking/user_icon/user_0.jpg"},
    favorites: {type: [String], default: []},
    likes: {type: [String], default: []},
    posts: {type: [String], default: []},
    subscribe: {type: [String], default: []},
    following: {type: [String], default: []},
    dateRegistration: {type: Date, default: Date.now},
    rating: {type: Number, default: 0},
});

const User = mongoose.model('user', userSchema);
module.exports = User;
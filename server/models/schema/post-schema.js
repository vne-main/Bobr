const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    id: Schema.Types.ObjectId,
    author_name: String,
    author_img: String,
    time: {type: Date, default: Date.now},
    title: String,
    tags: [String],
    text: String,
    likes: {type: Number, default: 0},
    favorites: {type: Number, default: 0},
    views: [String],
    comments: [{
        id: Schema.Types.ObjectId,
        author_name: String,
        author_img: String,
        time: {type: Date, default: Date.now},
        likes: {type: Number, default: 0},
        text: String
    }]
});

const Post = mongoose.model('posts', postSchema);
module.exports = Post;
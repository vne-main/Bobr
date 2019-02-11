const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: Schema.Types.ObjectId,
    author_name: String,
    author_img: String,
    time: {type: Date, default: Date.now},
    title: String,
    tags: {type: [String], default: 'Bobr'},
    text: String,
    likes: {type: Number, default: 0},
    favorites: {type: Number, default: 0},
    views: {type: Number, default: 0},
    comments: [{
        id: Schema.Types.ObjectId,
        author_name: String,
        author_img: String,
        time: {type: Date, default: Date.now},
        likes: {type: Number, default: 0},
        text: String
    }]
});

mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post');
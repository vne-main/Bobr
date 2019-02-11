const mongoose = require('../../libs/dbInit');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
        id: Schema.Types.ObjectId,
        author_name: String,
        author_img: String,
        time: { type: Date, default: Date.now },
        title: String,
        tags: [String],
        text: String,
        likes: Number,
        favorites: Number,
        views: Number,
        comments: [{
            id: Schema.Types.ObjectId,
            author_name: String,
            author_img: String,
            time: { type: Date, default: Date.now },
            likes: Number,
            text: String
        }]
});

mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post');
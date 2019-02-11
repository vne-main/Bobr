const posts = require('../models/schema/posts');

class Place {

    static async getAll () {
        return posts.find().catch(err => console.log(err));
    }

    static async create(postObject) {
        let newPost = new posts({
            author_name: postObject.author_name,
            title: postObject.title,
            text: postObject.text
        });
        newPost.save(err => console.log(err));
        return newPost;
    }

}

module.exports = Place;
const posts = require('../models/schema/posts');

class Place {

    static async getAll() {
        return posts.find().catch(err => console.log(err));
    }

    static async getCurrentPost(id) {
        return posts.find({_id: id});
    }

    static async addPost(postObject) {
        const newPost = new posts({
            author_name: postObject.author_name,
            author_img: postObject.author_img,
            title: postObject.title,
            text: postObject.text,
            tags: postObject.tags,
        });
        newPost.save(err => console.log(err));
        return newPost;
    }

    static async addComment(commentObject) {
        const newComment = {
            author_name: commentObject.author_name,
            text: commentObject.text
        };
        posts.update(
            {_id: commentObject._id},
            {$push: {comments: newComment}},
            {safe: true, upsert: true},
            function(err) {
                if(err){
                    console.log(500);
                }else{
                    console.log(200);
                }
            }
        );
        return 200;
    };

}

module.exports = Place;
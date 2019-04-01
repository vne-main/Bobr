const posts = require('./schema/post-schema');

class Place {

    static async getAllPosts() {
        return posts.find().catch(err => console.log(err));
    }

    static async getCurrentPost(objData) {
        const findPost = await posts.findById({_id: objData._id})
            .catch(() => {return 500});
        if(findPost === 500 || !findPost) return 500;
        const checkIp = await findPost.views.find(ip => {
            return ip === objData.ip;
        });
        if (!checkIp) {
            await posts.update({_id: objData._id}, {$push: {views: objData.ip}});
            return await posts.findById({_id: objData._id}).catch(() => {return 500});
        } else {
            return await posts.findById({_id: objData._id}).catch(() => {return 500});
        }
    }

    static async addPost(postObject) {
        const newPost = new posts({
            author_name: postObject.author_name,
            author_img: postObject.author_img,
            title: postObject.title,
            text: postObject.text,
            tags: postObject.tags,
        });
        console.info("New Post",newPost);
        newPost.save(err => console.log(err));
        return newPost;
    }

    static async addComment(newComment) {
        const objComment = {
            author_name: newComment.author_name,
            text: newComment.text
        };
        await posts.update({_id: newComment._id},{$push: {comments: objComment}});
        return await posts.findById({_id: newComment._id}).catch(() => {return 500});
    };
}

module.exports = Place;
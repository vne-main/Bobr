const postData = require('../models/postFunc');

class Fetch {

    static async getCurrentPost(req, res) {
        const post = await postData.getCurrentPost(req.params.id);
        console.log(post);
        res.send(post);
    }

    static async getAll(req, res) {
        const posts = await postData.getAll();
        res.send(posts.reverse());
    }

    static async addPost(req, res) {
        const post = await postData.addPost(req.body);
        res.send(post);
    }

}

module.exports = Fetch;
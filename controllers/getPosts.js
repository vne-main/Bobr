const postData = require('../models/postFunc');

class Fetch {

    static async getAll(req, res) {
        const posts = await postData.getAll();
        res.send(posts);
    }

    static async addPost(req, res) {
        const post = await postData.addPost(req.body);
        res.send(post);
    }

}

module.exports = Fetch;
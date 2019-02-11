const postData = require('../models/postFunc');

class Fetch {

    static async getAll(req, res) {
        const posts = await postData.getAll();
        res.send(posts);
    }

    static async create(req, res) {
        const post = await postData.create(req.body);
        res.send(post);
    }

}

module.exports = Fetch;
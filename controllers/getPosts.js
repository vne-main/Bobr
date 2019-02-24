const postData = require('../models/postFunc');

class Fetch {

    static async getAll(req, res) {
        const posts = await postData.getAll();
        res.send(posts.reverse());
    }

    static async getCurrentPost(req, res) {
        const post = await postData.getCurrentPost(req.params.id);
        console.log(post);
        res.send(post);
    }

    static async addPost(req, res) {
        const post = await postData.addPost(req.body);
        res.send(post);
    }

    static async addComment(req, res) {
        const comment = await postData.addComment(req.body);
        res.send(comment);
    }

    // Класс контроллер + набор методов.
}

module.exports = Fetch;
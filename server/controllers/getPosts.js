const postData = require('../models/postFunc');
const ip = require('ip');

class Fetch {

    static async getAllPosts(req, res) {
        const posts = await postData.getAllPosts();
        res.send(posts.reverse());
    }

    static async getCurrentPost(req, res) {
        console.info("IP = ", ip.address());
        const objData = {
            id: req.params.id,
            ip: ip.address()
        };
        const post = await postData.getCurrentPost(objData);
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
const postData = require('../models/postFunc');
const auxillaryFunc = require('../models/auxiliaryFunc');

class Fetch {

    static async getAllPosts(req, res) {
        const posts = await postData.getAllPosts();
        res.send(posts);
    }

    static async getCurrentPost(req, res) {
        const clientIp = await auxillaryFunc.checkIp(req);
        const objData = {
            id: req.params.id,
            ip: clientIp
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
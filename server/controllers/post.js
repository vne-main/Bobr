const postData = require("../models/post-func");
const auxillaryFunc = require("../models/auxiliaryFunc");

class Fetch {
  static async getAllPosts(req, res) {
    const posts = await postData.getAllPosts();
    res.send(posts.reverse());
  }

  static async getPost(req, res) {
    const clientIp = await auxillaryFunc.checkIp(req);
    const objData = {
      _id: req.params._id,
      ip: clientIp,
    };
    const post = await postData.getPost(objData);
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
}

module.exports = Fetch;

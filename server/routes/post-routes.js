const postController = require('../controllers/post');

module.exports = (server) => {
    server.get('/posts', async(req, res) => await postController.getAllPosts(req, res));
    server.get('/post/:_id', async(req, res) => await postController.getPost(req, res));
    server.post('/post', async(req, res) => await postController.addPost(req, res));
    server.post('/post/comment', async(req, res) => await postController.addComment(req, res));
};
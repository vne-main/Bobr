const postController = require('../controllers/getPosts');

module.exports = (server) => {
    server.get('/post', async(req, res) => await postController.getAll(req, res));
    server.get('/post/:id', async(req, res) => await postController.getCurrentPost(req, res));
    server.post('/post', async(req, res) => await postController.addPost(req, res));
    server.post('/post/comment', async(req, res) => await postController.addComment(req, res));

};

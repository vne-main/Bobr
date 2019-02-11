const postController = require('../controllers/getPosts');

module.exports = (server) => {
    server.get('/api/posts', async(req, res) => await postController.getAll(req, res));
    server.post('/api/add_post', async(req, res) => await postController.addPost(req, res));
    server.get('/api/ping', function (req, res) {
        res.send('API is running');
    });
};

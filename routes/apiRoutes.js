const postController = require('../controllers/getPosts');

module.exports = (server) => {
    server.get('/api/posts', async(req, res) => await postController.getAll(req, res));
    server.post('/api/posts', async(req, res) => await postController.create(req, res));
    server.get('/api/ping', function (req, res) {
        res.send('API is running');
    });
};

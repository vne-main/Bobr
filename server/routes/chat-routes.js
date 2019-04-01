const chatController = require('../controllers/chat');

module.exports = (server) => {
    server.get('/messages', async(req,res) => await chatController.getAllMessage(req, res));
};
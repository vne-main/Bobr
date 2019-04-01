const chatController = require('../controllers/chat');

module.exports = (server) => {
    server.get('/message', async(req,res) => await chatController.getAllMessage(req, res));
    server.post('/message', async(req,res) => await chatController.addMessage(req, res));
};
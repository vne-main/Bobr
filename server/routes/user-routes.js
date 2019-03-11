const userController = require('../controllers/user');

module.exports = (server) => {
    server.post('/auth/signup', async(req, res) => await userController.signUp(req, res));
    server.post('/auth/signin', async(req, res) => await userController.signIn(req, res));



    server.get('/user', async(req, res) => await userController.getAllUsers(req, res));
};
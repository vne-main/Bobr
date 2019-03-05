const hasNotSignedIn = require('../middlewares/hasNotSignedIn');

module.exports = (server) => {
    const render = pageName => (req, res) => res.render(req, res, `/${pageName}`);
    server
        .route('/')
        .get(
            hasNotSignedIn(render('')),
            render('')
        )
};
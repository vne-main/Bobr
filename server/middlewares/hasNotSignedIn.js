module.exports = (handler) => {
    return function (req, res, next) {
        console.info('user', req.user);
        console.info('auth', req.isAuthenticated());
        if (!req.isAuthenticated || !req.isAuthenticated()) {
            handler(req, res);
            return;
        }
        next();
    };
};


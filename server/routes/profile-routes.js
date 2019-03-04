const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.sendStatus(401);

        // res.redirect('/auth/login');
    } else {
        next();
    }
};

// router.get('/', authCheck, (req, res) => {
//     console.log(req.user.username);
//     res.render('profile', {user: req.user});
// });

router.get('/checkAuth', (req, res) => {
    console.log(req.user,'check');
    if (req.user) {
        res.send(req.user);
        res.sendStatus(
            200
        )
    } else {
        res.sendStatus(401)
    }

});

module.exports = router;
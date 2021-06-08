const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect("//" + req.headers.host);
});

router.get('/google/logout', (req, res) => {
    req.logout();
    res.send('logging out');
});

module.exports = router;

const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    req.logout();
});

module.exports = router;

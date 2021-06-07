const router = require('express').Router();

router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
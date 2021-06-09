const router = require('express').Router();
const Statistic = require('../models/statistic-model.js');

router.get('/user', (req, res) => {
  res.send(req.user);
});

router.get('/statistic/:userId', (req, res) => {
  Statistic.find({playerId: req.params.userId})
  .then(playerStat => {
    console.log(playerStat);
    if(!playerStat) {
      res.json({playedGames: null});
    } else {
      res.json({
        playedGames: playerStat.length,
        playedEasy: playerStat.filter(stat => stat.level == 1).length,
        playedMedium: playerStat.filter(stat => stat.level == 2).length,
        playedHard: playerStat.filter(stat => stat.level == 3).length,
        finishedGames: playerStat.filter(stat => stat.isFinished).length,
        finishedEasy: playerStat.filter(stat => stat.level == 1 && stat.isFinished).length,
        finishedMedium: playerStat.filter(stat => stat.level == 2 && stat.isFinished).length,
        finishedHard: playerStat.filter(stat => stat.level == 3 && stat.isFinished).length
      });
    }
  });
});

router.post('/statistic', (req, res) => {
  new Statistic(req.body)
    .save()
    .then(newStat => {
      console.log(newStat);
    });
  res.send("ok");
})

module.exports = router;
const { Router } = require('express');
const router = Router();

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/signup', (req, res) => {
  res.send('new signup');
});

router.post('/login', (req, res) => {
  res.send('user login');
});

module.exports = router;  
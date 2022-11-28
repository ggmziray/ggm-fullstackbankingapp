const router = require('express').Router();
const {
  signup, login, getDecoded, logout,
} = require('../controllers/index');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/cookie', getDecoded);

module.exports = router;

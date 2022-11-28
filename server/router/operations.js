const router = require('express').Router();
const { getOperations, addOperation, getBalance } = require('../controllers');
const { verifyToken } = require('../utils');

router.get('/balance/:id', getBalance);
router.get('/:id', verifyToken, getOperations);
router.post('/:id', verifyToken, addOperation);

module.exports = router;

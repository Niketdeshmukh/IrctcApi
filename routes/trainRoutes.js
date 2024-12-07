const express = require('express');
const { addTrain, getTrains } = require('../controllers/trainController');
const { verifyApiKey } = require('../middleware/apiKeyMiddleware');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyApiKey, addTrain);

router.get('/', authenticateUser, getTrains);

module.exports = router;

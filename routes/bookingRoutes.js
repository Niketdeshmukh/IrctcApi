const express = require('express');
const { bookSeat } = require('../controllers/bookingController');
const { authenticateUser } = require('../middleware/authMiddleware');

const router = express.Router();

// Book a seat on a train
router.post('/', authenticateUser, bookSeat);

module.exports = router;

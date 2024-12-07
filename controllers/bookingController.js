const Booking = require('../models/Booking');
const Train = require('../models/Train');

exports.bookSeat = async (req, res) => {
  const { trainId, seats } = req.body;
  try {
    const train = await Train.findOne({ where: { id: trainId } });
    if (train.availableSeats < seats) {
      return res.status(400).json({ error: 'Not enough seats available' });
    }

    await Train.update(
      { availableSeats: train.availableSeats - seats },
      { where: { id: trainId } }
    );

    const booking = await Booking.create({ userId: req.user.id, trainId, seatsBooked: seats });
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

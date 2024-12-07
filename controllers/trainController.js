const Train = require('../models/Train');

exports.addTrain = async (req, res) => {
  const { trainName, source, destination, totalSeats } = req.body;
  try {
    const train = await Train.create({ trainName, source, destination, totalSeats, availableSeats: totalSeats });
    res.status(201).json({ message: 'Train added successfully', train });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrains = async (req, res) => {
  const { source, destination } = req.query;
  try {
    const trains = await Train.findAll({ where: { source, destination } });
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

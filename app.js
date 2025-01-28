require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const db = require('./models'); // Correctly import models

const { User, Train, Booking } = db; // Destructure models from db

const app = express();
const PORT = process.env.PORT || 5000;

User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Train.hasMany(Booking, { foreignKey: 'trainId' });
Booking.belongsTo(Train, { foreignKey: 'trainId' });

// Middleware
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/bookings', bookingRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Database connection failed:', err));
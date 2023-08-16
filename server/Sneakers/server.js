const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sneakersRoutes = require('./routes/sneakersRoutes');
const mongoose = require('mongoose');

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/sneakers', sneakersRoutes);

// MongoDB Connect
mongoose.connection(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to the database');
        const PORT = process.env.Sneakers_PORT || 3002;
        app.listen(PORT, () => {
            console.log(`Sneakers Microservice is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    })

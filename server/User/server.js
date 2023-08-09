const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/userprofile', userRoutes);

// MongoDB Connect
mongoose.connection(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to the database');
        const PORT = process.env.User_PORT || 3001;
        app.listen(PORT, () => {
            console.log(`User Microservice is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    })

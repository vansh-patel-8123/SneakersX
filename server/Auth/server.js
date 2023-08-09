const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const mongoose = require('mongoose');

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// MongoDB Connect
mongoose.connection(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to the database');
        const PORT = process.env.Auth_PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Auth Microservice is running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    })

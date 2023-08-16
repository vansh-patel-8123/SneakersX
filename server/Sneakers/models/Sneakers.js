const mongoose = require('mongoose');

const sneakersSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    productName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: String, 
    price: {
        type: Number,
        required: true
    },
    qands: [{
        size: String,
        quantity: Number,
        required: true
    }],
    condition: [{
        type: String,
        enum: ["new", "used"],
        default: "new"
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('Sneaker', sneakersSchema)
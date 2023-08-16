const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true 
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sneakers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sneaker',
        required: true,
    }],
    qands: [{
        size: String,
        quantity: Number,
        required: true
    }],
    totalPrice: {
        type: Number,
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

module.exports = mongoose.model('Cart', cartSchema)
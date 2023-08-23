const Cart = require("../models/Cart");
const Sneakers = require("../../Sneakers/models/Sneakers");
const getCart = async (req, res) => {
    const userId = req.params.userId;

    try {
        const cart = await Cart.findOne({ buyer: userId }).populate("sneakers");

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "An error occurred" });
    }
};
const addProductToCart = async (req, res) => {
    const userId = req.params.userId;
    const sneakersId = req.params.sneakersId;
    const {size, quantity} = req.body;

    try{
        // finding product from sneakers
        const sneaker = await Sneakers.findOne({sneakersId});

        if (!sneaker) {
            return res.status(404).json({ message: 'Sneaker not found' });
        }

        //cart model data create
        const cart = await Cart.findByIdAndUpdate(
            {buyer: userId},
            {
                $addToSet: {sneaker: sneakersId, qands: {size, quantity}},
                $inc: {totalPrice: sneaker.price * quantity}
            },
            {upsert: true, new: true}
        ).populate('sneakers');

        return res.status(200).json(cart);

    }catch(error){
        return res.status(500).json({ message: 'An error occurred' });
    }

 };
const updateProductToCart = async (req, res) => {
    const userId = req.params.userId;
    const sneakerId = req.params.sneakerId;
    const { size, quantity } = req.body;

    try{    
        const sneaker = await Sneaker.findById(sneakerId);

        if (!sneaker) {
            return res.status(404).json({ message: 'Sneaker not found' });
        }

        const cart = Cart.findByIdAndUpdate(            
            { buyer: userId, 'sneakers': sneakerId, 'qands.size': size },
            { $set: { 'qands.$.quantity': quantity } },
            { new: true }
        ).populate('sneakers');

        return res.status(200).json(cart);

    }catch(error){
        return res.status(500).json({ message: 'An error occurred' });
    }
 };
const deleteProductToCart = async (req, res) => {
    const userId = req.params.userId;
    const sneakerId = req.params.sneakerId;
    const { size } = req.body;
    
    try {
        const sneaker = await Sneaker.findById(sneakerId);
        
        if (!sneaker) {
            return res.status(404).json({ message: 'Sneaker not found' });
        }
        
        const cart = await Cart.findOneAndUpdate(
            { buyer: userId },
            {
                $pull: { sneakers: sneakerId, qands: { size } },
                $inc: { totalPrice: -sneaker.price * quantity }
            },
            { new: true }
        ).populate('sneakers');
        
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
 };

module.exports = {
    getCart,
    addProductToCart,
    updateProductToCart,
    deleteProductToCart,
};

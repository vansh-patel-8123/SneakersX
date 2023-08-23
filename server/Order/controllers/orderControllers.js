const Order = require("../models/Order")

const getAllOrder = async (req,res) => {
    try{
        // Finding on DB
        const orders = await Order.find();
        if(!orders){
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.status(200).json(orders);
    }
   catch(error){
    return res.status(500).json({message: 'An error occurred'})
   }

};
const specificOrder = async (req,res) => {
    // OrderID
    const orderId = req.params.orderId;

    try{
        // Finding OrderId on DB
        const order = await Order.findOne({orderId});
        
        if(!orders){
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json(order);

    }catch(error){
        return res.status(500).json({message: 'An An error occurred'})
    }
};
const createOrder = (req,res) => {
    const { sneakerId, buyer, totalPrice } = req.body;

};

const updateOrder = (req,res) => {

};

const deleteOrder = (req,res) => {

};

module.exports = {
    getAllOrder,
    specificOrder,
    createOrder,
    updateOrder,
    deleteOrder
}
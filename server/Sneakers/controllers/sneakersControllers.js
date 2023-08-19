const Sneakers = require("../models/Sneakers");

const allProduct = async (req,res) => {
    try{
        const products = await Sneakers.find();
        return res.status(200).json(products);
    }catch(error){
        return res.status(500).json({ message: 'An error occurred' });
    }
};
const specificProduct = async (req,res) => {
    const productId = req.params.id;
    try{
        const product = await Sneakers.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    }catch(error){
        return res.status(500).json({ message: 'An error occurred' });
    }
};
const createProduct = async (req,res) => {
    const { productName, brand, description, qands, condition, seller} = req.body;

    const sneakers = new Sneakers({
        productName: productName,
        brand: brand,
        description: description,
        qands: qands,
        condition: condition,
        seller: seller
    })

    try {
        const newProduct = await sneakers.save();
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }

};
const updateProduct = async (req,res) => {
    const productId = req.params.id;
    const updateData = req.body;
    
    try{
        const updatedProduct = await Sneakers.findByIdAndUpdate(productId, updateData, {new: true});
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(updatedProduct);
    }
    catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
};
const deleteProduct = async (req,res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await Sneaker.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(204).send(); // Successful deletion, no content to send
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
};

module.exports = {
    allProduct,
    specificProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
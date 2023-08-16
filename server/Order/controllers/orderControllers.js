router.get('/', sneakersControllers.getAllOrder)
router.get('/:id', sneakersControllers.specificOrder)
router.post('/', sneakersControllers.createOrder)
router.put('/:id', sneakersControllers.updateOrder)
router.delete('/:id', sneakersControllers.deleteOrder)

const getAllOrder = (req,res) => {

};
const specificOrder = (req,res) => {

};
const createOrder = (req,res) => {

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
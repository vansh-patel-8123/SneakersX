const express = require('express');
const router = express.Router();

const sneakersControllers = require('../controllers/sneakersControllers');

router.get('/', sneakersControllers.getAllOrder)
router.get('/:id', sneakersControllers.specificOrder)
router.post('/', sneakersControllers.createOrder)
router.put('/:id', sneakersControllers.updateOrder)
router.delete('/:id', sneakersControllers.deleteOrder)

module.exports = router;
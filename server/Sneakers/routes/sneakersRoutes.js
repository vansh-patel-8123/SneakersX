const express = require('express');
const router = express.Router();

const sneakersControllers = require('../controllers/sneakersControllers');

router.get('/', sneakersControllers.allProduct)
router.get('/:id', sneakersControllers.specificProduct)
router.post('/', sneakersControllers.createProduct)
router.put('/:id', sneakersControllers.updateProduct)
router.delete('/:id', sneakersControllers.deleteProduct)

module.exports = router;
const express = require('express');
const router = express.Router();

const cartControllers = require('../controllers/cartControllers');

router.get('/:userID', cartControllers.getCart)
router.post('/:userId/:sneakerId', cartControllers.addProductToCart)
router.put('/:userId/:sneakerId', cartControllers.updateProductToCart)
router.put('/:userId/:sneakerId', cartControllers.deleteProductToCart)

module.exports = router;
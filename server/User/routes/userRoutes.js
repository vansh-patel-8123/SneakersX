const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/:id', userController.getUserProfile);
router.put('/:id', userController.updateUserProfile);

module.exports = router;

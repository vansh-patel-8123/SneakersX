const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/authControllers');

router.post('/register', authCtrl.registerCtrl);
router.post('/login', authCtrl.loginCtrl);

module.exports = router;

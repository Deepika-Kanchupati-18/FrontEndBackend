const express = require('express');
const { signup, login } = require('../Controllers/AuthController');
const { loginvalidation, signvalidation } = require('../Middlewares/AuthValidation');

const router = express.Router();

router.post('/signup', signvalidation, signup);
router.post('/login', loginvalidation, login);

module.exports = router;

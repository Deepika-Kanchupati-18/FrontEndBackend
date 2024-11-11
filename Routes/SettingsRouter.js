const express = require('express');
const { updateSettings } = require('../Controllers/SettingsController');
const router = express.Router();

// Middleware for verifying JWT token
const verifyToken = require('../Middlewares/verifyToken');


router.put('/settings', verifyToken, updateSettings);

module.exports = router;

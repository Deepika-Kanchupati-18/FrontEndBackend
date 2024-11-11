const express = require('express');
const { createOrUpdateDashboard } = require('../Controllers/DashboardController');
const router = express.Router();

// Middleware for verifying JWT token
const verifyToken = require('../Middlewares/verifyToken');


router.post('/dashboard', verifyToken, createOrUpdateDashboard);

module.exports = router;

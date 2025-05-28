// src/routes/dataHandlerRoutes.js
const express = require('express');
const router = express.Router();
const dataHandlerController = require('../controllers/dataHandlerController');

router.post('/data/:accountId', dataHandlerController.forwardDataToDestinations);

module.exports = router;

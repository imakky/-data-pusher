const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

/**
 * @swagger
 * /api/destinations:
 *   post:
 *     summary: Create a new destination
 *     tags: [Destinations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - account_id
 *               - url
 *               - method
 *               - headers
 *             properties:
 *               account_id:
 *                 type: integer
 *               url:
 *                 type: string
 *               method:
 *                 type: string
 *               headers:
 *                 type: object
 *     responses:
 *       201:
 *         description: Destination created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', destinationController.createDestination);

/**
 * @swagger
 * /api/destinations:
 *   get:
 *     summary: Get all destinations
 *     tags: [Destinations]
 *     responses:
 *       200:
 *         description: List of destinations
 */
router.get('/', destinationController.getAllDestinations);

/**
 * @swagger
 * /api/destinations/account/{accountId}:
 *   get:
 *     summary: Get destinations by account ID
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of destinations
 */
router.get('/account/:accountId', destinationController.getDestinationsByAccount);

/**
 * @swagger
 * /api/destinations/{id}:
 *   put:
 *     summary: Update a destination
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *               method:
 *                 type: string
 *               headers:
 *                 type: object
 *     responses:
 *       200:
 *         description: Destination updated
 *       404:
 *         description: Destination not found
 */
router.put('/:id', destinationController.updateDestination);

/**
 * @swagger
 * /api/destinations/{id}:
 *   delete:
 *     summary: Delete a destination
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Destination deleted
 *       404:
 *         description: Destination not found
 */
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;
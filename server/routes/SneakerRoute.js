
const express = require('express');
const router = express.Router();
const sneakerController = require('../controllers/SneakerController');

// Define routes for CRUD operations

// Create a new sneaker
router.post('/', sneakerController.createSneaker);

// Get all sneakers
router.get('/', sneakerController.getAllSneakers);

// Get a specific sneaker by ID
router.get('/:id', sneakerController.getSneakerById);

// Update a sneaker by ID
router.put('/:id', sneakerController.updateSneaker);

// Delete a sneaker by ID
router.delete('/:id', sneakerController.deleteSneaker);

module.exports = router;
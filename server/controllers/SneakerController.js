const Sneaker = require('../models/Sneaker');

// Controller methods for CRUD operations

// Create a new sneaker
exports.createSneaker = async (req, res) => {
  try {
    const newSneaker = await Sneaker.create(req.body);
    res.status(201).json(newSneaker);
  } catch (error) {
    res.status(500).json({ error: 'Could not create sneaker' });
  }
};

// Get all sneakers
exports.getAllSneakers = async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve sneakers' });
  }
};

// Get a specific sneaker by ID
exports.getSneakerById = async (req, res) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);
    if (!sneaker) {
      return res.status(404).json({ error: 'Sneaker not found' });
    }
    res.json(sneaker);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve sneaker' });
  }
};

// Update a sneaker by ID
exports.updateSneaker = async (req, res) => {
  try {
    const updatedSneaker = await Sneaker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedSneaker) {
      return res.status(404).json({ error: 'Sneaker not found' });
    }
    res.json(updatedSneaker);
  } catch (error) {
    res.status(500).json({ error: 'Could not update sneaker' });
  }
};

// Delete a sneaker by ID
exports.deleteSneaker = async (req, res) => {
  try {
    const deletedSneaker = await Sneaker.findByIdAndDelete(req.params.id);
    if (!deletedSneaker) {
      return res.status(404).json({ error: 'Sneaker not found' });
    }
    res.json({ message: 'Sneaker deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete sneaker' });
  }
};

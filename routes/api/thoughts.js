const express = require('express');
const router = express.Router();
const thoughtController = require('../../controllers/thoughtController');

// GET route for thoughts
router.get('/', thoughtController.getThoughts);

// POST route for creating a thought
router.post('/', thoughtController.createThought);

// PUT route for updating a thought
router.put('/:id', thoughtController.updateThought);

// DELETE route for deleting a thought
router.delete('/:id', thoughtController.deleteThought);

module.exports = router;

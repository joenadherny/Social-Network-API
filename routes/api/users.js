const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// GET route for users
router.get('/', userController.getUsers);

// POST route for creating a user
router.post('/', userController.createUser);

// PUT route for updating a user
router.put('/:id', userController.updateUser);

// DELETE route for deleting a user
router.delete('/:id', userController.deleteUser);

module.exports = router;

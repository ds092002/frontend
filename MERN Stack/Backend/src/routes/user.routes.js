const express = require('express');
const userRoutes = express.Router();
const userVerifyToken = require('../helpers/userVerifyToken'); // If you're using token verification

const {
    registerUser,
    // loginUser,
    getUser,
    getAllUser,
    updateUser,
    deleteUser,
    // changePassword
} = require('../controllers/user.controller');

userRoutes.post('/register', registerUser); // Register a user
// userRoutes.post('/login', loginUser); // Login a user
userRoutes.get('/getAll', getAllUser); // Get all users
userRoutes.get('/get', getUser); // Get single user by ID
userRoutes.put('/update', updateUser); // Update user details
userRoutes.delete('/delete', deleteUser); // Delete user
// userRoutes.put('/password', changePassword); // Change user password

module.exports = userRoutes;

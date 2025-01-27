const userRoutes = require('express').Router();
const userRoute = require('./user.routes');

userRoutes.use('/user', userRoute);  // This means endpoint will be '/api/users/user'

module.exports = userRoutes;

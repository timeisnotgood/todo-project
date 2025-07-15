
const userRoute = require('./UserRouter');
const todoRoute = require('./todoRoute')
const express = require('express');

const router = express.Router();

router.use('/user', userRoute)
router.use('/todo', todoRoute)

module.exports = router;
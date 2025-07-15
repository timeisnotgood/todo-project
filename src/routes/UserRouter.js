const express = require('express');
const router = express.Router();
const { loginUser } = require("../controller/userController");

router.post('/session', loginUser)

module.exports = router;
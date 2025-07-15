const express = require('express');
const router = express.Router();
const { getTodos,createTodos,updatetodos } = require("../controller/todoController");
const auth = require("../middleware/auth");

router.get('/getTodo', auth, getTodos);
router.post('/createTodo', auth, createTodos);
router.put('/updateTodo/:id', auth, updatetodos);

module.exports = router;
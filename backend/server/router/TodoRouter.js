const express = require('express')
const { CreateTodoView, GetTodosView } = require('../views/TodoView')

const router = express.Router()

router.post('/', CreateTodoView)
router.get('/', GetTodosView)

module.exports = router
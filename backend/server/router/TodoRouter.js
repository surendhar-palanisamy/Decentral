const express = require('express')
const { CreateTodoView, GetTodosView, UpdateTodosView, DeleteTodosView } = require('../views/TodoView')

const router = express.Router()

router.post('/', CreateTodoView)
router.get('/', GetTodosView)
router.put('/:id', UpdateTodosView)
router.delete('/:id', DeleteTodosView)

module.exports = router
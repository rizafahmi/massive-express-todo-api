const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/todo_controller.js')


router.get('/', TodoController.index)
router.post('/', TodoController.create)
router.put('/:id', TodoController.put)
router.delete('/:id', TodoController.remove)

module.exports = router

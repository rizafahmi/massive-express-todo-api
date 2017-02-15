const express = require('express')
const router = express.Router()

const TodoController = require('../controllers/todo_controller.js')


/* GET home page. */
router.get('/', TodoController)

module.exports = router

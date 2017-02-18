const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user_controller.js')


router.post('/find', UserController.find)
router.post('/', UserController.create)
module.exports = router

const express = require('express')
const router = express.Router()
const UserController = require('./UserController')

router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getOne)
router.put('/users', UserController.update)
router.delete('/users/:id', UserController.delete)

module.exports = router
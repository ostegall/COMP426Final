var express = require('express');
var router = express.Router();
var LoginService = require('../services/login-service')

router.post('/newUser', LoginService.createUser)
router.put('/update/:id', LoginService.updateUser)
router.delete('/delete/:id', LoginService.deleteUser)
router.get('/get/:id', LoginService.getUserById)
router.get('/get', LoginService.getUsers)

module.exports = router
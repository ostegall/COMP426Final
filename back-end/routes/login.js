var express = require('express');
var router = express.Router();
var LoginCtrl = require('../controllers/login-ctrl')

router.post('/newUser', LoginCtrl.createUser)
router.put('/update/:id', LoginCtrl.updateUser)
router.delete('/delete/:id', LoginCtrl.deleteUser)
router.get('/get/:id', LoginCtrl.getUserById)
router.get('/get', LoginCtrl.getUsers)

module.exports = router
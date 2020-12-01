const { response } = require('express');
var express = require('express');
var router = express.Router();

const usersController = require('../src/controllers/usersController')

router.get('/users', usersController.index);
router.post('/users', usersController.create);

module.exports = router;

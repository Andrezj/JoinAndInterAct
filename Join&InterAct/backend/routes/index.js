const { response } = require('express');
const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const { setupWebsocket } = require('../src/websocket');

const app = express();

var router = express.Router();

const usersController = require('../src/controllers/usersController')

const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://root:pass@host.localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

router.get('/users', usersController.index);
router.post('/users', usersController.create);

module.exports = router;

const express = require('express');
const route = express.Router();
const home = require('./controllers/homeController');
const contato = require('./controllers/contatoController');

route.get('/', home.index);
route.get('/contato', contato.index);

module.exports = route;
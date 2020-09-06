const express = require('express');
const inicio = express.Router();

inicio.get('/', (req, res, next) => {
    res.send('Inicio con router');
});

module.exports = inicio;
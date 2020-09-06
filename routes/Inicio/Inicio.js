const express = require('express');
const inicio = express.Router();

inicio.get('/', (req, res, next) => {
    res.render('../views/pages/inicio');
});


module.exports = inicio;
const express = require('express');
const contacto = express.Router();

contacto.get('/', (req, res, next) => {
    res.send('Contacto con router');
});

module.exports = contacto;
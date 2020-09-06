const express = require('express');
const contacto = express.Router();

contacto.get('/', (req, res, next) => {
    res.render('../views/pages/contacto');
});

module.exports = contacto;
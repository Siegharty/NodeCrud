const express = require('express');
const router = express.Router();

const inicioRouter = require('./Inicio/Inicio.js');
const contactoRouter = require('./Contacto/Contacto.js');

router.use('/', inicioRouter);
router.use('/contacto', contactoRouter);

module.exports = router;
const express = require('express');
const router = express.Router();

const inicioRouter = require('./Inicio/Inicio.js');

router.use('/', inicioRouter);

module.exports = router;
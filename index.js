//Imports
const express = require('express');
const dotenv = require('dotenv');

//Variables de entorno
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res, next) => {
    res.send('Inicio');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
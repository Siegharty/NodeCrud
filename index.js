//Imports
const express = require('express');
const dotenv = require('dotenv');

//Variables de entorno
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;

//Router handler
var route = require('./routes/index');

const app = express();

//Uso de middlewares
app.use('/', route);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
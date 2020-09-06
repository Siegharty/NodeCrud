//Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const path = require('path');

//Variables de entorno
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT;

//Router handler
const router = require('./routes/index');

const app = express();

//Configuracion de ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//Uso de carpeta public
app.use(express.static('./public'));

//Uso de rutas
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
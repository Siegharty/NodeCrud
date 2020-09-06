const express = require('express');
const app = express();

const address = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en http://${address}:${port}`);
});
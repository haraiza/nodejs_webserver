const express = require('express');
const app = express();
const port = 8080;

//Definicion de rutas
//Home
app.get('/', (req, res) => {
    res.send('Hello World');
})

//hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola-Mundo');
})

//Cualquier otra pagina que no este definida llegara aqui
app.get('*', (req, res) => {
    res.send('404 | Page not found');
})

//Esto aparecera en la consola
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



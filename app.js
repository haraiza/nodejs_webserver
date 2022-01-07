const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

//Servir contenido estatico
app.use(express.static('public'));


//hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola-Mundo');
})

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Humberto Araiza',
        titulo: 'Curso Node'
    });
})

//generic. Con esto la pagina http://localhost:8080/generic no tiene terminacion .html
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

//elements. Con esto la pagina http://localhost:8080/elements no tiene terminacion .html
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})


//Cualquier otra pagina que no este definida llegara aqui
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

//Esto aparecera en la consola
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



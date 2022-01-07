require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

//home RENDER
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Humberto Araiza',
        titulo: 'Curso Node'
    });
})

//generic RENDER
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Humberto Araiza',
        titulo: 'Curso Node'
    });
})

//elements RENDER
app.get('/elements', (req, res) => {
    res.render('elements', {
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



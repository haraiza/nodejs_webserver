const express = require('express');
const app = express();
const port = 8080;

//Servir contenido estatico
app.use(express.static('public'));


//hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola-Mundo');
})

//Cualquier otra pagina que no este definida llegara aqui
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

//Esto aparecera en la consola
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})



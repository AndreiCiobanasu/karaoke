var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

app.use('/public',express.static('public')); // Route pour la feuille de style


app.get('/', (req, res) => {        // Route vers la page login
    res.render('index');
});


app.get('/chat', (req, res) => {   // Route vers la page du chat
    res.render('index');
});


app.set('views', './views');
app.set('view engine', 'ejs');
server.listen(port, () => {
    console.log(`serveur en écoute sur le port ${port}`);

});

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();


/************************ 
 *      CONFIGURAÇÃO
 ************************/
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

/************************ 
 *      ROTAS
 ************************/

// página inicial
 app.get('/', function(req, res){
    res.render('home');
 });
 app.get('/login', function(req, res){
    res.render('login');
 });
app.post('/acesso', function(req, res){
    res.send("logado")
});

// Página não encontrada ou erros
app.use(function(req, res, next) {
    res.send('OK, algo de certo está errado!');
  });

app.listen(3000, function(){
    console.log('Servidor iniciado.');
});

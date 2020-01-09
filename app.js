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


app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
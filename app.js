// Módulos
    const express = require('express');
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');
    const path = require('path');
    const routerAdmin = require('./routes/admin');
    const routerTec = require('./routes/tec');
    const app = express();
    const config = require('./src/config')


/************************ 
 *      CONFIGURAÇÃO
 ************************/
    
    //Handlebars
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body-Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

/************************ 
 *      PUBLIC
 ************************/
    app.use(express.static(__dirname + '/public'));


 /************************ 
 *      ROTAS
 ************************/
    //Admin
    app.use('/admin', routerAdmin);
    app.use('/tec', routerTec);

    //locais
    app.get('/', (req, res) => {
        res.render('home');
    });


 /************************ 
 *      OUTRAS
 ************************/

app.listen(config.SERVER_PORT, function(){
    console.log('Servidor iniciado.');
});



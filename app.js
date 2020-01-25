// Módulos
    const express = require('express');
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');
    const connection = require('./src/database');
    const path = require('path');
    const routerAdmin = require('./routes/admin');
    const routerTec = require('./routes/tec');
    const CONFIG = require('./src/config')
    const app = express();

/************************ 
 *      CONFIGURAÇÃO
 ************************/
    
    //Handlebars
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body-Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    //sequelize
    connection
        .authenticate()
        .then(() => {
            console.log('Conexão com DB feita com sucesso!');
        })
        .catch((err) =>{
            console.log('Erro ao logar no DB: ' + err);
        });


/************************ 
 *   Arquivos Estáticos
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
    //OS
    var OS = require('./models/OS')
    var historico = require('./models/Historico');

    var novaOS = {
        numOS: 65011,
        sequencia: 1,
        aparelho: 'Monitor',
        modelo: 'LN32B452',
        serie: '12D78es',
        observacao: 'Tela arranhada',
        acessorio: 'sem acessórios',
        defeito: 'Liga e após 10s desliga.',
        clienteId: 2
    }
    

    OS.create(novaOS).then((salvo) => {
        var novoHistorico = {
            tipoDoc: 1,
            laudo: "Trocar fonte",
            OsId: salvo.id
        }

        historico.create(novoHistorico)
    }).catch((err) => {
        console.log("ERRO: " + err);
    });


    // listen
app.listen(CONFIG.SERVER_PORT, function(){
    console.log('Servidor iniciado.');
});
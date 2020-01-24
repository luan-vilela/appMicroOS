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

    //Funcionario
    var Funcionario = require('./model/Funcionario');

    Funcionario.create({
        nome: 'Luan Vilela',
        codFuncionario: 13,
        cargo: 'Técnico',
        codCarga: 1,
        salario: 998.00,
        comissao: 0.35

    });

    var Historico = require('./model/Historico');

    Historico.create({
        tipoDoc: 2,
        laudo: "Cliente reclamado do barulho.",
        funcionarioId: 1
    });

    // Peça
    var Peca = require('./model/Peca')

    Peca.create({
        nome: "Cabo AC",
        valor: 9.98,
        quantidade: 2

    });


    // listen
app.listen(CONFIG.SERVER_PORT, function(){
    console.log('Servidor iniciado.');
});
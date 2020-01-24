// Módulos
    const express = require('express');
    const exphbs = require('express-handlebars');
    const bodyParser = require('body-parser');
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


 //debug bd
    require('./model/Autor')
    require('./model/Livro')
    const Autor = mongoose.model('Autor');
    const Livro = mongoose.model('Livro');
    var novolivro = {
        nome: 'meu livro',
        cod: 1
    }


    var li = new Livro(novolivro).save().then(() => {
        console.log('salvo com sucesso');
    }).catch((err) => {
        console.log('Não foi possivel salvar livro:::: ' + err);
    });

    var novoAutor ={
        nome: 'luan vilela',
       // livros: novolivro
    }
    new Autor(novoAutor).save().then(() => {
        console.log('salvo com sucesso');
    }).catch((err) => {
        console.log('Não foi possivel salvar autor:::: ' + err);
    });


    // const Funcionario = mongoose.model('Funcionarios')
    // var novoFuncionario = {
    //     nome: "Altair",
    //     codFuncionario: 1,
    //     cargo: 'Técnico',
    //     codCargo: 1,
    //     salario: 1200,
    //     comissao: 35
    // }

    // const Peca = mongoose.model('Pecas');
    // var novaPeca = {
    //     nome: 'plug AC',
    //     valor: 10,
    //     quantidade: 2
    // }

    // const Historico = mongoose.model('Historicos');
    // var novohistorico = {
    //     tipoDoc: 1,
    //     laudo: "cliente não sabe o que fala"
        
    // }

    // new Funcionario(novoFuncionario).save().then(() => {
    //     console.log('funcionario ' + novoFuncionario.nome + ' salvo com sucesso');
    // }).catch((err) => {
    //     console.log('Não foi possivel salvar funcionario:::: ' + err);
    // });

    // new Historico(novohistorico).save().then(() => {
    //     console.log('Historico salvo com sucesso');
    // }).catch((err) => {
    //     console.log('Não foi possivel salvar funcionario:::: ' + err);
    // });

    // new Peca(novaPeca).save().then(() => {
    //     console.log('Peça ' + novaPeca.nome + ' salvo com sucesso');
    // }).catch((err) => {
    //     console.log('Não foi possivel salvar funcionario:::: ' + err);
    // });

    // listen
app.listen(CONFIG.SERVER_PORT, function(){
    console.log('Servidor iniciado.');
});
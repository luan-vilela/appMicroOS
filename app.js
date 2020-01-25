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
    var telefoneCliente = require('./models/TelefoneCliente');
    var cliente = require('./models/Cliente');


    
    var novoCliente = {
        nome: 'Maria da Silva',
        tipo: 'Física',
        documento: '000999888-77',
        endereco: 'Afonso Pena, 5356',
        cidade: 'Campo Grande',
        estado: 'Mato Grosso do Sul'
    }

    cliente.create(novoCliente).then((clienteSalvo) => {

        var novoTelefone = [
            {
                telefone: '(67) 3333-4444',
                clienteId: clienteSalvo.id
            },
            {
                telefone: '(67) 4444-4444',
                clienteId: clienteSalvo.id
            },
            {
                telefone: '(67) 5555-4444',
                clienteId: clienteSalvo.id
            },
            {
                telefone: '(67) 6666-4444',
                clienteId: clienteSalvo.id
            }
            
        ]

        for(i in novoTelefone)
            telefoneCliente.create(novoTelefone[i]);

        
    }).catch((err) => {
        console.log('Erro salvar Cliente: ' + err);
    });
    

   


    // listen
app.listen(CONFIG.SERVER_PORT, function(){
    console.log('Servidor iniciado.');
});
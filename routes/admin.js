// Módulos
const express = require('express');
const router = express.Router();
const config = require('../src/config')
const Funcionario = require('../models/Funcionario')

 /************************ 
 *      ROTAS
 ************************/
router.get('/index', (req, res) => {
    res.render('admin/index', {adm: 'adm'});
});

router.get('/gerenciar', (req, res) => {
    res.render('admin/gerenciar', {adm: 'adm'});
});

router.get('/nova', (req, res) => {
    res.render('admin/nova', {adm: 'adm'});
});


router.post('/auth', (req, res) => {
    var pass = req.body.inputPassword;


    Funcionario.findOne({
        where: { 
            nome: req.body.inputEmail
        }}).then((user) => {
            if(user === null)
                res.render('admin/login');
            else
                res.render('admin/index', {adm: 'adm'})
        }).catch((err) => {
            console.log('erro')
            res.render('admin/login');
        })




        
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});

router.get('/os/:tipo', (req, res) => {
    res.render('admin/tabela', {tipo: req.params.tipo, adm: 'adm'});
});



module.exports = router;
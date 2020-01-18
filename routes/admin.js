// Módulos
const express = require('express');
const router = express.Router();
const config = require('../src/config')


 /************************ 
 *      ROTAS
 ************************/
router.get('/index', (req, res) => {
    res.render('admin/index', {adm: 'adm'});
});
router.post('/auth', (req, res) => {
    res.redirect('/admin/index');
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});

router.get('/os/:tipo', (req, res) => {
    res.render('admin/tabela', {tipo: req.params.tipo, adm: 'adm'});
});



module.exports = router;
// Módulos
const express = require('express');
const router = express.Router();
const config = require('../src/config')


 /************************ 
 *      ROTAS
 ************************/
router.post('/index', (req, res) => {
    res.render('admin/index', {adm: 'adm'});
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});


module.exports = router;
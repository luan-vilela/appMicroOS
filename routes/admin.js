// Módulos
const express = require('express');
const router = express.Router();



 /************************ 
 *      ROTAS
 ************************/
router.get('/index', (req, res) => {
    res.render('admin/index');
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});


module.exports = router;
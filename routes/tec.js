const express = require('express');
const router = express.Router();

 /************************ 
 *      ROTAS
 ************************/
router.get('/:tecnico', (req, res) => {
    
    res.render('tec/index', {tecnico: req.params.tecnico, tec: 'tec'})
});

router.get('/user/logout', (req, res) => {
    res.redirect('/')
});

router.get('/os/:tipo', (req, res) => {
    res.render('tec/tabela', {tipo: req.params.tipo, tec: 'tec'});
});

router.get('/os/ordem/:id', (req, res) => {
    res.render('tec/ordem', {id: req.params.id, tec: 'tec'})
})




module.exports = router;
const express = require('express');
const router = express.Router();

 /************************ 
 *      ROTAS
 ************************/
router.get('/:tecnico', (req, res) => {
    
    res.render('tec/index', {tecnico: req.params.tecnico, nav: 1})
});

router.get('/os/:tipo', (req, res) => {
    res.render('tec/tabela', {tipo: req.params.tipo, nav: 1});
});

router.get('/os/ordem/:id', (req, res) => {
    res.render('tec/ordem', {id: req.params.id, nav: 1})
})


module.exports = router;
const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.produtosList);
router.get('/:id', produtoController.produtosRead);
router.post('/',  produtoController.produtosCreate);//verify,
router.put('/:id',  produtoController.produtosUpdate);//verify,
router.delete('/:id',  produtoController.produtosDelete);//verify,

module.exports = router;

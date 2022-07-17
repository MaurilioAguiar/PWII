const db = require('../config/db.config');
const Produto = db.produto;

// Lista todos os produtos
exports.produtosList = async(req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json({ produtos: produtos });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Detalha um produto
exports.produtosRead = async(req, res) => {
  try {
    const produto = await Produto.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Cria um produto
exports.produtosCreate = async(req, res) => {
  try {
    const produto = await Produto.create(req.body);
    res.status(201).json({ produto: produto });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Atualiza um produto
exports.produtosUpdate = async(req, res) => {
  try {
    const produto = await Produto.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apaga um produto
exports.produtosDelete = async(req, res) => {
  try {
    const produto = await Produto.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};
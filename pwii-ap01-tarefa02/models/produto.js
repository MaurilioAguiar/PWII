module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define('produto', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    quantidade: {//inseri
        type: Sequelize.BIGINT,
        allowNull: false,
        allowEmpty:false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        allowEmpty: false
    }
  });
  //Produto.sync({force: true});//inseri
  return Produto;
};

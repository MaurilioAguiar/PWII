//importação das dependências
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
//var {Sequelize} = require('sequelize');//inserido por mim com base no vídeo do professor

//importação dos roteadores
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var produtoRouter = require('./routes/produto');
var db = require('./config/db.config');//utilitário para conexão com o bd, não tem no vídeo, mas está aqui
const { sequelize } = require('./config/db.config');

//inicia o app express
var app = express();

// config dotenv and sequelize
dotenv.config();
db.sync();//não tem no vídeo
//sequelize.sync(); tem no vídeo, mas não estava aqui

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//configuração dos middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configurações dos roteadores
app.use('/', indexRouter);//rota raiz
app.use('/user', usersRouter);//rota usuário
app.use('/produto', produtoRouter);//rota contato

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3000);//inseri

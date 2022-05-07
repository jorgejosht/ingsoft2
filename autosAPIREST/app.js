var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
mongoose.connect('mongodb+srv://jorgejoshuat:Joshua2412@cluster0.re5xb.mongodb.net/biblioteca?retryWrites=true&w=majority', {useNewUrlParser: true});

var indexRouter = require('./routes/index');
var autosRouter = require('./routes/autos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', autosRouter);

module.exports = app;

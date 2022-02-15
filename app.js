var express = require('express');
var path = require('path');
var logger = require('morgan');
const db = require("./config/db.config");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.once('open', ()=>{
  console.log('Connected to Mongo DB Atlas');
});

db.on('error', (err) => {
  console.log(err);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;

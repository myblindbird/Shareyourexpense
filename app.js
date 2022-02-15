const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require("./config/db.config");

const indexRoute = require('./routes/index'); //homepage
const createuser = require('./routes/createuserRoute'); //create user
const creategroup = require('./routes/creategroupRoute');//create group
const calculateexpense = require('./routes/calculateexpenseRoute.js');//calculate expense and display
// const displayexpense = require('./routes/displayexpenseRoute')


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.once('open', ()=>{
  console.log('Connected to Mongo DB Atlas');
});


db.on('error', (err) => {
  console.log(err);
});

app.use('/', indexRoute);
app.use('/createuser', createuser);
app.use('/creategroup', creategroup);
app.use('/calculateexpense', calculateexpense);
// app.use('/displayexpense',displayexpense);


module.exports = app;

const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require("./config/db.config");
const bodyParser = require('body-parser');

const createuser = require('./routes/createuserRoute'); //create user
const creategroup = require('./routes/creategroupRoute');//create group
const splitbill = require('./routes/splitbillRoute.js');//calculate expense and display

// const displayexpense = require('./routes/displayexpenseRoute')


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.once('open', ()=>{
  console.log('Connected to Mongo DB Atlas');
});


db.on('error', (err) => {
  console.log(err);
});


app.use('/createuser', createuser);
app.use('/creategroup', creategroup);
app.use('/splitbill', splitbill);
// app.use('/displayexpense',displayexpense);


module.exports = app;

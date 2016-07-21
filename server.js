'use strict'
const bobbyParser     = require('body-parser');
const express         = require('express');
const request         = require('request');
const logger          = require('morgan');
const path            = require('path');
const apiRoute       = require('./routes/travelAdvisory');
const port            = 3000;
const app             = express();

app.listen(port,()=>{
  console.log('sup from '+port);
})

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use('/', apiRoute)
app.use(logger('dev'));

// bobbyParser.jason
app.use(bobbyParser.urlencoded({extended: false}));



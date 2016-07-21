'use strict'
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const bobbyParser     = require('body-parser');
const express         = require('express');
const request         = require('request');
const logger          = require('morgan');
const path            = require('path');
const apiRoute        = require('./routes/travelAdvisory');
const port            = 3000;
const app             = express();


// app.set('view engine','ejs');
// app.use(express.static(path.join(__dirname,'public')));

app.use('/api', apiRoute)
app.use(logger('dev'));

// bobbyParser.jason
app.use(bobbyParser.urlencoded({extended: false}));
app.use( express.static(path.join(__dirname, 'dist')))

app.listen(port,()=>{
  console.log('sup from '+port);
})

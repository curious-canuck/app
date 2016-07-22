'use strict'
const env             = process.env.NODE_ENV || 'development';
const DEV             = env==='development';
const dotenv          = (DEV) ? require('dotenv').config() : undefined;

const bobbyParser     = require('body-parser');
const express         = require('express');
const request         = require('request');
const logger          = require('morgan');
const path            = require('path');
const apiRoute        = require('./routes/travelAdvisory');
const port            = 3000;
const app             = express();



const drop = require ('./routes/allcountries')
app.use( logger( DEV ? 'dev' : 'common') );

app.use('/dropd', drop);


app.use('/api', apiRoute)
// app.use(logger('dev'));

app.use(bobbyParser.urlencoded({extended: false}));
app.use( express.static(path.join(__dirname, 'dist')))

app.listen(port,()=>{
  console.log('sup from '+port);
})

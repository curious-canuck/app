'use strict'
const env             = process.env.NODE_ENV || 'development';
const DEV             = env==='development';
const dotenv          = (DEV) ? require('dotenv').config() : undefined;

const bodyParser      = require('body-parser');
const express         = require('express');
const request         = require('request');
const logger          = require('morgan');
const path            = require('path');
const apiRouter       = require('./routes/travelAdvisory');
const dropDownRouter  = require ('./routes/allcountries')

const app             = express();
const port            = 3000;

app.use( logger( DEV ? 'dev' : 'common') );
// app.use(logger('dev'));

app.use('/dropd', dropDownRouter);
app.use('/api', apiRouter)

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port,()=>{
  console.log('sup from '+port);
})

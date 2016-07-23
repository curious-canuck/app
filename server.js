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
app.set('superSecret', 'my super secret word')
app.use( logger( DEV ? 'dev' : 'common') );


app.use('/dropd', dropDownRouter);
app.use('/api', apiRouter)
app.use( '/userapi',        require('./routes/userApi'));
app.use( '/userapi/users',  require('./routes/users') );






app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port,()=>{
  console.log('sup from '+port);
})

'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = DEV && require('dotenv').config();

const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

const drop = require ('./routes/allcountries')


app.use( logger( DEV ? 'dev' : 'common') );
app.use(bodyParser.json());
app.use( express.static(path.join(__dirname, 'dist')))



app.get('/', (req,res)=>
res.sendFile('index.html')
  )

app.use('/dropd', drop);
app.listen(PORT , ()=> console.log(`server here! listening on`, PORT ) )

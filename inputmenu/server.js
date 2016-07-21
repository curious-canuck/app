'use strict'


const express= require('express');
const logger = require('morgan');
const path = require('path')
const PORT = process.env.port || 3000
const drop = require ('./routes/allcountries')

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.use(logger('dev'));


app.listen(PORT, function() {
  console.log('Server is listening on ',PORT);
});


app.get('/', (req,res)=>
res.sendFile('index.html')
  )

app.use('/dropd', drop);

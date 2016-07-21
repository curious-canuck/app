'use strict'
const bobbyParser     = require('body-parser');
const express         = require('express');
const request         = require('request');
const logger          = require('morgan');
const path            = require('path');
const port            = 3000;
const app             = express();

app.listen(port,()=>{
  console.log('sup from '+port);
})

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(logger('dev'));

// bobbyParser.jason
app.use(bobbyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{

  request({
    headers: {
      "X-Auth-API-Key": "hq4mup65jf8zc6awqws4puut"
    },
    url:'https://api.tugroup.com/v1/travelsafe/countries/LA',
    method:'get',
    json:true
  },(err,response,body)=>{
    if(err) throw err;

      console.log(body)
      res.results = body;
      res.json(res.results)

  })
});

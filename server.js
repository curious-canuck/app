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

// app.get('/', app.get('/api',(req,res)=>{

  request({
    headers: {
      "X-Auth-API-Key": "hq4mup65jf8zc6awqws4puut"
    },
    url:'https://api.tugroup.com/v1/travelsafe/countries/BO',
    method:'get',
    qs:{

      format:"json"
    },
    json:true
  },(err,res,body)=>{
    if(err) throw err;



      res.apiResults = body.businesses;
      console.log(res.apiResults)
  })



/* Test this route! Load localhost:3000/ and use $.get('/api')
*  This is hard-coding in query parameters though, if our AJAX call sends query parameters, we access them with req.query!
*  In that case, we can just say qs: req.query
*/


// app.get('/api',(req,res)=>{

//   request({
//     headers: {
//       "X-Auth-API-Key": "hq4mup65jf8zc6awqws4puut"
//     },
//     url:'https://api.tugroup.com/v1/travelsafe/countries/LA',
//     method:'get',
//     qs:{

//       format:"json"
//     },
//     json:true
//   },(err,res,body)=>{
//     if(err) throw err;


//       console.log(body)
//       res.results = body.businesses;
//       next()
//   })



/* wunderground.com/apikey/v2/ny/newyork
* wunderground_api_key

* `wunderground.com/${process.env.wunderground_api_key}/v2/ny/newyork`

*/

const request         = require('request');

function getData(req,res,next){
 let yada = req.params.code
  request({
    headers: {
      "X-Auth-API-Key": process.env.TA_KEY
    },
    url:'https://api.tugroup.com/v1/travelsafe/countries/'+yada,
    method:'get',
    json:true
  },(err,response,body)=>{
    if(err) throw err;

      console.log(body)
      res.results = body;
  next();
  })
}

module.exports={ getData }

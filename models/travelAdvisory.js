const request         = require('request');



function fullPull(req,res,next){
 let yada = req.params.code = req.query.code
  request({
    headers: {
      "X-Auth-API-Key": "hq4mup65jf8zc6awqws4puut"
    },
    url:'https://api.tugroup.com/v1/travelsafe/countries/'+yada,
    method:'get',
    json:true
  },(err,response,body)=>{
    if(err) throw err;

      console.log(body)
      res.results = body;
      res.json(res.results)
  next();
  })
}

module.exports={ fullPull }

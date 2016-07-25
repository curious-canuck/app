const request = require('request');

module.exports = {

  getData(req,res,next){
   let countryCode = req.params.code
    request({
      headers: {
        "X-Auth-API-Key": "hq4mup65jf8zc6awqws4puut"
      },
      url:'https://api.tugroup.com/v1/travelsafe/countries/'+countryCode,
      method:'get',
      json:true
    },(err,response,body)=>{
      if(err) throw err;

        console.log(body)
        res.results = body;
    next();
    })
  }
}

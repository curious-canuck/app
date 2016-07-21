const request         = require('request');
const pg = require('pg-promise')({
// Initialization Options
});
const config = {
host:       process.env.DB_HOST,
port:       process.env.DB_PORT,
database:   process.env.DB_NAME,
user:       process.env.DB_USER,
password:   process.env.DB_PASS,
};

const _db = pg(config);


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

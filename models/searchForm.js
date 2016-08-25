const {MongoClient}         = require('mongodb')
const dbConnection          = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/countries'

module.exports = {

 getAllCountryCodes(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .find({})
        .sort({"Name": 1})
        .toArray(function(err,data){
          if(err) throw err;

          res.countries = data
          next()
        })
    })
  }

}

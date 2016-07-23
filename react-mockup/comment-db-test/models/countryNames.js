const { MongoClient }   = require('mongodb');
const dbConnection      = 'mongodb://localhost:27017/countries'

module.exports = {
  getAllCountryNames(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .find({})
        .toArray(function(err,data){
          if(err) throw err;

          res.codes = data
          next()
        })
    })
  }
}

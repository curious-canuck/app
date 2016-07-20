const { MongoClient }   = require('mongodb');
const dbConnection      = 'mongodb://localhost:27017/countries'

module.exports = {

  getCountryComments(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .findOne({"Code":"BY"}, function(err,data){
          if(err) throw err;

          res.comments = data
          next()
        })
    })
  }

  getAllCommentData(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .find({})
        .toArray(function(err,data){
          if(err) throw err;

          res.comments = data
          next()
        })
    })
  }

}

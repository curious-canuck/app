 const MongoClient           =require('mongodb').MongoClient
 const dbConnection          ='mongodb://localhost:27017/allcode'

module.exports = {

 getAllCommentData(req,res,next){
    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('countries')
        .find({})
        .toArray(function(err,data){
          if(err) throw err;

          res.countries = data
          next()
        })
    })
  }

}

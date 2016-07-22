
 'use strict'
 const MongoClient           =require('mongodb').MongoClient
 const dbConnection          ='mongodb://localhost:27017/countries'


const config = process.env.DATABASE_URL || {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};




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

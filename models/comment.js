const { MongoClient }   = require('mongodb');
const dbConnection      = process.env['MONGODB_URI']
// const dbConnection      = 'mongodb://localhost:27017/countries'

module.exports = {

  getCountryComments(req,res,next){
    let code = req.params.code

    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .findOne({"Code": code }, function(err,data){
          if(err) throw err;

          res.comments = data
          next()
        })
    })
  },

  addCountryComments(req,res,next){
    console.log(req.body)

    let code        = req.params.code;
    let username    = req.body.username;
    let comment     = req.body.comment;

    MongoClient.connect(dbConnection, function(err,db){
      if(err) throw err;

      db.collection('code_comment')
        .update({ "Code" : code },
          { $addToSet: {
            "comments" : {
              "username" : username,
              "comment" : comment
            }
          }
        },
        function(err,data){
          if(err) throw err;

          console.log(data);
          res.comments = data
          next()
        }
      )
    })
  }

}

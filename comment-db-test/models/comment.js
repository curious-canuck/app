const { MongoClient }   = require('mongodb');
const dbConnection      = 'mongodb://localhost:27017/countries'

module.exports = {

  getCountryComments(req,res,next){
    let code = req.query.code

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
    let code      = req.query.code;
    let username  = req.query.username;
    let comment   = req.query.comment;

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
          next()
        }
      )
    })
  }

}

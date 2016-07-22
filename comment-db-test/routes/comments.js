const commentRouter = require('express').Router()
const comDB         = require('../models/comment')

commentRouter.put('/add/:code', comDB.addCountryComments, function(req,res){
  res.send(res.params.code)
})

commentRouter.get('/:code', comDB.getCountryComments, function(req,res){
  res.json(res.comments)
})

module.exports = commentRouter;

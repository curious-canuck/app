const commentRouter = require('express').Router()
const comDB         = require('../models/comment')

commentRouter.get('/', comDB.getCountryComments, function(req,res){
  res.json(res.comments)
})

commentRouter.get('/all', comDB.getAllCommentData, function(req,res){
  res.json(res.comments)
})

module.exports = commentRouter;

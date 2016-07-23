
const express     = require('express');
const userApi         = express.Router();

const tokenService      = require('../service/tokenService')


/* get the database middleware */
const userService = require('../models/user')

const sendError = (err,req,res,next)=>res.status(401).json(err)

/* This is whre the user logs in */
userApi.post('/authenticate',
            userService.getUserByUsername,
            tokenService.createToken,
            sendError)


userApi.get('/', (req, res)=>
  res.json({ message: 'Welcome to the coolest API on earth!' })
)

module.exports = userApi;

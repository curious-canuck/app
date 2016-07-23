const apiRouter       = require('express').Router();
const travelAPI       = require('../models/travelAdvisory');

  apiRouter.get('/:code', travelAPI.getData, (req,res)=>{
    res.json(res.results)
  });

module.exports = apiRouter

const router            = require('express').Router();
const { getData }       = require('../models/travelAdvisory');

  router.get('/', (req,res)=>{
    res.render('index')
  })

  router.get('/:code', getData, (req,res)=>{
    res.json(res.results)
  });

module.exports = router

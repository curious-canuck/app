const router = require('express').Router();
const { fullPull } = require('../models/travelAdvisory');

router.get('/', (req,res)=>{
  res.render('index')
})

router.get('/api', fullPull, (req,res)=>{
res.json(res.results)
});


module.exports = router

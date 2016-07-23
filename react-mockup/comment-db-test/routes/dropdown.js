const dropdownRouter  = require('express').Router()
const ccDB            = require('../models/countryNames')

dropdownRouter.get('/', ccDB.getAllCountryNames, (req,res)=>{
  res.json(res.codes)
})

module.exports = dropdownRouter;


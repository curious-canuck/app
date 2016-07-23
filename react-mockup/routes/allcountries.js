const dropDownRouter  = require('express').Router();
const dataDb          = require('../models/searchForm');

dropDownRouter.get('/', dataDb.getAllCountryCodes, (req,res)=>{
  res.json(res.countries)
})

module.exports = dropDownRouter;


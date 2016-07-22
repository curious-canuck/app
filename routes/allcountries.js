const router = require('express').Router();
const  dataDb = require('../models/searchForm');

router.get('/' , dataDb.getAllCommentData, (req,res)=>{

  res.json(res.countries)

} )


module.exports = router;




const router = require('express').Router();
const  dataDb = require('../models/mongo');



router.get('/' , dataDb.getAllCommentData, (req,res)=>{

res.json(res.comments)

} )

module.exports = router;






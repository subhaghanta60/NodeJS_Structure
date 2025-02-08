const express = require('express');

const router = express.Router();

router.get('/info',(req,res)=> {
    return res.json({msg:"coming From V2 Routes"})
})

module.exports=router
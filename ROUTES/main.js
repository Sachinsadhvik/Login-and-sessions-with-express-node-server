const express = require('express');
var router= express.Router();

var authRouter= require('./auth');

router.use('/auth',authRouter);
router.get('/home',(req,res)=>{
   // console.log(req.session);
   if(req.session.email){
        res.render('home')}
    else{
        res.redirect('/auth/signin')
    }
})
module.exports= router;

const express = require('express');
var router= express.Router();
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
const { createUser, verifyUser}= require("../CONTROLLER/auth");
router.get('/signup',(req,res)=> {
    res.render("signup");
})

router.get('/signin',(req,res)=>{
    res.render('signin',{
        message:" "
    }) 
})

router.post('/signup', (req,res)=>{
    createUser(req.body).then(()=>{
       
        res.redirect('/auth/signin');

    }).catch((e)=>{
       res.end(e);
    })

})



router.post("/signin",(req,res)=>{
   verifyUser(req.body).then((user)=>{
       console.log(user);
      req.session.email=user.email;
       req.session._id=user._id;
    // const payload={
    //     _id:user._id,
    //     email:user.email
    // }
    // const token= jwt.sign(payload,'sachin');
    // res.json({token: token});
          res.redirect('/home')
   }).catch((e)=>{
    res.render('signin',{
     message:"please provide correct details"
    })
   })


})


router.post("/signout", (req,res)=>{
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.redirect("/auth/signin")


})

module.exports= router;
const express=require('express');
// const { models } = require('mongoose');
const router=express.Router();
router.use(express.json());
const usermodel=require('../models/userData');
const jwt=require('jsonwebtoken');

router.post('/login',async(req,res)=>{
  const user=await usermodel.findOne({email:req.body.email});
  if(!user){
    res.status(404).send({message:'user not found'});
  }
  try{
if(user.password==req.body.password){
  const payload={email:user.email,password:user.password};
  const token=jwt.sign(payload,'abcdefg');
  res.status(200).send({message:'login successfull',token:token})
}else{
  res.status(400).send({message:'invalid credentials'})
}
  }catch(error){
   console.log(error);
  }
})









module.exports=router;
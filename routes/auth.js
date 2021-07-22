const express=require('express')
const router=express.Router()
const mysql=require('mysql')
const db=mysql.createPool({
  host:"localhost",
  user:"root", 
  password:"password",
  database:"users_shunyeka"
 })
 router.get('/getUsers',(req,res)=>{
  db.query("SELECT * FROM users",(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })

 })

 router.post('/newUser',(req,res)=>{

  const {id,name,email,phone,phone1}=req.body
  
  db.query("INSERT INTO users (id,name,email,phone,phone1) values (?,?,?,?,?)",[id,name,email,phone,phone1],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully added a user"})
    }
  })
})
router.post('/deleteUser',(req,res)=>{

  const {id}=req.body
  
  db.query("DELETE FROM users where id=?",[id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully deleted a user"})
    }
  })
})
router.post('/updateUserName',(req,res)=>{

  const {name,id}=req.body
  
  db.query("UPDATE users SET name=? where id=?",[name,id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully updated a user"})
    }
  })
})
router.post('/updateUserEmail',(req,res)=>{

  const {email,id}=req.body
  
  db.query("UPDATE users SET email=? where id=?",[email,id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully updated a user"})
    }
  })
})
router.post('/updateUserPhone',(req,res)=>{

  const {phone,id}=req.body
  
  db.query("UPDATE users SET phone=? where id=?",[phone,id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully updated a user"})
    }
  })
})
router.post('/updateUserPhone1',(req,res)=>{

  const {phone1,id}=req.body
  
  db.query("UPDATE users SET phone1=? where id=?",[phone1,id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    } 
    else{
      res.status(200).json({message:"Successfully updated a user"})
    }
  })
})
router.post('/viewUser',(req,res)=>{
  const {id}=req.body
  db.query("SELECT name,email,phone,phone1 FROM users WHERE id=?",[id],(err,result)=>{
    if(err){
      res.status(400).json({err})
    }
    else{
      res.status(200).json({result})
    }
  })

 })


 module.exports=router
import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar'
import {useDispatch} from 'react-redux'
import { createNewUser,updateExistingUserEmail,updateExistingUserName,updateExistingUserPhone,updateExistingUserPhone1} from '../redux/actions'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function NewUser() {
  const {id,info}=useParams()
  const dispatch=useDispatch()
  const [input,setInput]=useState({id:"",name:"",email:"",phone:"",phone1:""})
const [auth,setAuth]=useState(false)
const [auths,setAuths]=useState("name")
 const [upName,setUpName]=useState("")
 const [upEmail,setUpEmail]=useState("")
 const [upPhone,setUpPhone]=useState("")
 const [upPhone1,setUpPhone1]=useState("")
 
  const onHandleNewUser=(e)=>{
    e.persist();
    setInput(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
  const onNewUserSubmit=(e)=>{
    e.preventDefault()
    dispatch(createNewUser(input))
    setInput(inputs => ({...inputs,id:"",name:"",email:"",phone:"",phone1:""}));
    setAuth(false)
  }

 const onUpdateUserName=(e)=>{
  e.preventDefault()
  dispatch(updateExistingUserName({name:upName,id:id}))
  setUpName("")
 }
 const onUpdateUserEmail=(e)=>{
  e.preventDefault()
  dispatch(updateExistingUserEmail({email:upEmail,id:id}))
  setUpEmail("")
 }
 const onUpdateUserPhone=(e)=>{
  e.preventDefault()
  dispatch(updateExistingUserPhone({phone:upPhone,id:id}))
  setUpPhone("")
 }
 const onUpdateUserPhone1=(e)=>{
  e.preventDefault()
  dispatch(updateExistingUserPhone1({phone1:upPhone1,id:id}))
  setUpPhone1("")
 }

  return (
    <div>
    <Navbar/>
    <div className="container">
      <div className="row p-3">
      <div className="col-12">
        <h3 className="text-center mt-4 landingHeader"><span className="newUserHeader">{info}</span> a {info==="Create"?"New":"Existing"} User</h3>
      </div>
      <div className=" formContainer bg-dark">
        {info==="Create"?(
          <form  autoComplete="off" onSubmit={onNewUserSubmit}>
   <div className="col-12 col-lg-4 col-md-4 offset-md-4 formBox">
   <div className="input-group mb-3">
 
    <input type="text" className="form-control" name="id" placeholder="ID"  aria-describedby="basic-addon1" required onChange={onHandleNewUser} value={input.id}/>
    </div>
    <div className="input-group mb-3">

      <input type="text" className="form-control" name="name" placeholder="Name"  aria-describedby="basic-addon1" required onChange={onHandleNewUser} value={input.name}/>
    </div>
    <div className="input-group mb-3">

      <input type="text" className="form-control" name="email" placeholder="Email"  aria-describedby="basic-addon1" onChange={onHandleNewUser} value={input.email} required/>
    </div>
    <div className="input-group mb-3">
 
      <input type="text" className="form-control" name="phone" placeholder="Phone Number" aria-describedby="basic-addon1"  onChange={onHandleNewUser} value={input.phone} required/>&nbsp;<i onClick={()=>setAuth(!auth)} className="fas fa-plus-square text-light addBtn"></i>
    </div>
    {auth&&(
      <div className="input-group mb-3">
          
          <input type="text" className="form-control" name="phone1" placeholder="Phone Number" aria-describedby="basic-addon1"  onChange={onHandleNewUser} value={input.phone1} required/>
        </div>
    )}
    
    <div className="text-center mt-4">
       <button className="btn newFormSubmitBtn">{info} User</button>
     </div>
      </div>
    </form>
        ):(
          <div>
            <div className="text-center mt-3">
              <h6>
                <span className="btn updateViewBtn mt-2" onClick={()=>setAuths("name")}>Name</span>&nbsp;&nbsp;
                <span className="btn updateViewBtn mt-2" onClick={()=>setAuths("email")}>Email</span>&nbsp;&nbsp;
                <span className="btn updateViewBtn mt-2" onClick={()=>setAuths("phone")}>Phone</span>&nbsp;&nbsp;
                <span className="btn updateViewBtn mt-2" onClick={()=>setAuths("phone1")}>Phone 1</span></h6>
            </div>
            
    {
      auths==="name"&&(
<form className="mt-3"  autoComplete="off"  onSubmit={onUpdateUserName}>
   <div className="col-12 col-lg-4 col-md-4 offset-md-4 formBox" >
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="name" placeholder="Name"  aria-describedby="basic-addon1"  onChange={(e)=>setUpName(e.target.value)} value={upName} required/>
    </div>
    <div className="text-center mt-4">
       <button className="btn newFormSubmitBtn">{info} User</button>
     </div>
      </div>
    </form>
      )
    }   
    {
      auths==="email"&&(
        <form className="mt-3"  autoComplete="off" onSubmit={onUpdateUserEmail}>
   <div className="col-12 col-lg-4 col-md-4 offset-md-4 formBox">
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="email" placeholder="Email"  aria-describedby="basic-addon1"  onChange={(e)=>setUpEmail(e.target.value)} value={upEmail} required/>
    </div>
    <div className="text-center mt-4">
       <button className="btn newFormSubmitBtn">{info} User</button>
     </div>
      </div>
    </form>
      )
    }
      {
      auths==="phone"&&(
        <form className="mt-3"  autoComplete="off"  onSubmit={onUpdateUserPhone}>
   <div className="col-12 col-lg-4 col-md-4 offset-md-4 formBox">
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="email" placeholder="Phone"  aria-describedby="basic-addon1"  onChange={(e)=>setUpPhone(e.target.value)} value={upPhone} required/>
    </div>
    <div className="text-center mt-4">
       <button className="btn newFormSubmitBtn">{info} User</button>
     </div>
      </div>
    </form>
      )
    }
      {
      auths==="phone1"&&(
        <form className="mt-3"  autoComplete="off"  onSubmit={onUpdateUserPhone1}>
   <div className="col-12 col-lg-4 col-md-4 offset-md-4 formBox">
    <div className="input-group mb-3">
      <input type="text" className="form-control" name="email" placeholder="Phone 1"  aria-describedby="basic-addon1"  onChange={(e)=>setUpPhone1(e.target.value)} value={upPhone1} required/>
    </div>
    <div className="text-center mt-4">
       <button className="btn newFormSubmitBtn">{info} User</button>
     </div>
      </div>
    </form>
      )
    }

          </div>
          
        )}
 
   </div>
      </div>
    </div>
    <NotificationContainer/>
    </div>
  )
}

export default NewUser

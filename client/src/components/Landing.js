import React,{useEffect} from 'react'
import { deleteExistingUser, getUsers } from '../redux/actions'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Navbar from './Navbar'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Landing() {
  const dispatch=useDispatch()
  const history=useHistory()
  const userData=useSelector(state=>state.userData)
  useEffect(()=>{
    dispatch(getUsers())
  },[])

  const addNewUser=()=>{
    history.push('/users/0/Create')
  }
  const updateUser=(id)=>{
    history.push(`/users/${id}/Update`)
  }
  const viewUser=(id)=>{
    history.push(`/viewUser/${id}`)
  }
  const deleteUser=(id)=>{
    dispatch(deleteExistingUser({id:id}))
    setTimeout(()=>{
      window.location.reload(false)
    },3000)
    
  }
  return (
    <div>
      <Navbar/>
      <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-12">
           <h3 className="text-center landingHeader">Users Dashboard</h3>
           <div className="userBox bg-dark">
            <div className="text-end">
              <button className="btn  addUserBtn" onClick={addNewUser}>Add User</button>
            </div>
            <div className="userTableBox mt-3">
              {userData&&(
                <div className="table-responsive mt-4">
                <table className="table table-borderless">
                <thead className="table-light">
                  <tr>
               
                  <th scope="col">Name</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  </tr>
                </thead>
                <tbody className="table-light">
                {userData&&userData.map((data,i)=>{
                  return(
                    <tr key={i}>
                    
                      <td>{data.name}</td>
                      <td><button className="btn functionalBtns" onClick={()=>viewUser(data.id)}><i className="fas fa-eye"></i></button></td>
                      <td><button onClick={()=>updateUser(data.id)} className="btn functionalBtns"><i className="fas fa-pen" ></i></button></td>
                      <td><button onClick={()=>deleteUser(data.id)} className="btn functionalBtns"><i className="fas fa-trash"></i></button></td>
                    </tr>
                  )
                })}
                </tbody>
                </table>
                </div>
              )}
            </div>
           </div>
        </div>
      </div>
      </div>
      <NotificationContainer/>
    </div>
  )
}

export default Landing

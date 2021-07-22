import React,{useEffect} from 'react'
import Navbar from './Navbar'
import {useParams} from 'react-router-dom'
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {useDispatch,useSelector} from 'react-redux'
import { viewUser } from '../redux/actions';
function ViewUser() {
  const {id}=useParams()
  const dispatch=useDispatch()
  const viewedUser=useSelector(state=>state.viewedUser)
  useEffect(()=>{
dispatch(viewUser({id:id}))
  },[])
  console.log(id)
  console.log(viewedUser)
  return (
    <div>
      <Navbar/>
      <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-12">
        <h3 className="text-center landingHeader"><span className="newUserHeader">View</span> User</h3>
        <div className="userBox bg-dark">
            <div className="userTableBox mt-3">
              {viewedUser&&(
                <div className="table-responsive mt-4">
                <table className="table table-borderless">
                <thead className="table-light">
                  <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Phone 1</th>
                  </tr>
                </thead>
                <tbody className="table-light">
                {viewedUser&&viewedUser.map((data,i)=>{
                
                    return(
                      
                      <tr key={i}>
                        <td>{id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.phone1===null?"-":data.phone1}</td>
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

export default ViewUser

import axios from 'axios'
import {GET_USERS,VIEW_USER} from '../constants/constants'
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
export const getUsers=()=>async(dispatch,getState)=>{
  await axios.get('http://localhost:5000/auths/getUsers')
  .then(res=>dispatch({
    type:GET_USERS,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const createNewUser=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/newUser',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}

export const deleteExistingUser=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/deleteUser',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}


export const updateExistingUserName=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/updateUserName',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=>NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const updateExistingUserEmail=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/updateUserEmail',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=>NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const updateExistingUserPhone=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/updateUserPhone',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=>NotificationManager.error(err.response.data.err.code, '', 2000))
}
export const updateExistingUserPhone1=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/updateUserPhone1',data)
  .then(res=> NotificationManager.success(res.data.message, '', 2000))
  .catch(err=>NotificationManager.error(err.response.data.err.code, '', 2000))
}

export const viewUser=(data)=>async(dispatch,getState)=>{
  await axios.post('http://localhost:5000/auths/viewUser',data)
  .then(res=>dispatch({
    type:VIEW_USER,
    payload:res.data.result
  }))
  .catch(err=> NotificationManager.error(err.response.data.err.code, '', 2000))
}
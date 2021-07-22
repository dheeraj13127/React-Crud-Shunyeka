import {GET_USERS,CREATE_NEW_USER,VIEW_USER} from '../constants/constants'
const initState={
  userData:"",
  newUserMessage:"",
  viewedUser:""
  
}

export const rootReducer=(state=initState,action)=>{
  switch(action.type){
    case GET_USERS:{
      return Object.assign({},state,{
        userData:action.payload
      })
    }
    case CREATE_NEW_USER:{
      return Object.assign({},state,{
        newUserMessage:action.payload
      })
    }
    case VIEW_USER:{
      return Object.assign({},state,{
        viewedUser:action.payload
      })
    }
    default:{
      return state
    }
  }
}
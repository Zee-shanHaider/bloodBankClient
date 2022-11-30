import userTypes from "./userTypes";
import axios from 'axios'
import {url} from '../../configUrl'
const {User_Signup_Success, User_Signup_Failed, User_Login_Success, User_Login_Failed} = userTypes;


const userLogin = (response)=>{
    return {
        type: User_Login_Success,
        payload: response
    }
}

const userLoginFailed = (err)=>{
  return {
    type: User_Login_Failed,
    payload: err
  }
}

const signupSuccess = (response)=>{
    return {
        type: User_Signup_Success,
        payload: response
    }
}

const signupFailed = (err)=>{
  return{
    type: User_Signup_Failed,
    payload: err
  }
}

export const userLoginAsync = (params)=>async (dispatch)=>{
  try{
    var config = {
      method: 'post',
      url: url+'/api/postLogin',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : params
    };
    
   const response = await axios(config)
   if(response){
     console.log(JSON.stringify(response.data));
     dispatch(userLogin(response.data))
     localStorage.setItem('token', response.data.token)
   }
  }
   catch(error){
    dispatch(userLoginFailed(error))
   }
} 

export const userSignupAsync = (params,image)=> async (dispatch)=>{
    const formData = new FormData()
    formData.append('username', params.username)
    formData.append('phoneNo', params.phoneNo)
    formData.append('email', params.email)
    formData.append('password', params.password)
    formData.append('image', image)
    try{
      var config = {
          method: 'post',
          url: url+'/api/signup',
          data : formData
          };
          const response = await axios(config);
          if(response){
            dispatch(signupSuccess(response.data))
          }
    }
    catch(error){
      console.log('error in signup',error)
      dispatch(signupFailed(error))
    }
}
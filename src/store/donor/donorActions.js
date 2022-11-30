import { url } from '../../configUrl';
import axios from 'axios';
import donorTypes from './donorTypes'
const {Set_Donor_Success, Set_Donor_Failed, Get_Donor_Success, Get_Donors_Failed} = donorTypes;


const setDonorSuccess = (response)=>{
    return {
        type: Set_Donor_Success,
        payload: response
    }
}

const setDonorFailed = (error)=>{
    return{
        type: Set_Donor_Failed,
        payload: error
    }
}

const getDonorsSuccess = (donors)=>{
    return{
        type: Get_Donor_Success,
        payload: donors
    }
}

const getDonorsFailed = (error)=>{
    return{
        type: Get_Donors_Failed,
        payload: error
    }
}

export const setDonorAsync = (params,token)=> async (dispatch)=>{
    var config = {
        method: 'post',
        url: url+'/api/postDonor',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: token
        },
        data : params
      };
       
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(setDonorSuccess(response.data))
      })
      .catch(function (error) {
        dispatch(setDonorFailed(error))
      });
}

export const getDonorsAsync = ()=>async (dispatch)=>{
    var config = {
        method: 'get',
        url: url+'/api/getDonors',
        headers: { 
          'Content-Type': 'application/json'
        },
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(getDonorsSuccess(response?.data?.donors))
      })
      .catch(function (error) {
        dispatch(getDonorsFailed(error))
      });
}
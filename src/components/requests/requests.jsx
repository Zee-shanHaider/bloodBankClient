import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouseUser,faHouseChimney,faDroplet,faUserFriends,faBarChart, faBarsProgress, faBarsStaggered, faFile, faCalendarPlus, faCheck, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

import './requests_style.css'

const Request = () => {


    const [showForm, setShowForm] = useState(false)
    const [requests, setRequests] = useState(null);
    const [prescription, setPrescription] = useState(null)
    const Initial_Values ={
      blood: '',
      address:'',
      city: '',
      message: '',
    }
    const [formValues,setFormValues] = useState(Initial_Values)

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://localhost:8080/api/getRequests',
            headers: { 
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvaXVAZ21haWwuY29tIiwidXNlcklkIjoiNjM3MjhkMTNhNjlmYjAyN2M0Y2IyZWMxIiwiaWF0IjoxNjY4NTE5NDg1LCJleHAiOjE2Njg1MjMwODV9.SHHrBB-tBP9eAw3xN0BwCT3XdQYf5-rhWV92k_vX7gQ', 
              'Content-Type': 'application/json'
            },
          };
          axios(config)
          .then(function (response) {
            setRequests(response?.data?.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[showForm])

    const changeHandler = (e)=>{
      const {name,value} = e.target;
      setFormValues({...formValues, [name]: value})
    }

    const submitHandler = (e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('blood', formValues.blood)
      formData.append('address', formValues.address)
      formData.append('city', formValues.city)
      formData.append('file', prescription)
      formData.append('message', formValues.message)
      var config = {
        method: 'post',
        url: 'http://localhost:8080/api/postRequest',
        data : formData
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFormValues(Initial_Values);
        setPrescription(null);
        setShowForm(false);
      })
      .catch(function (error) {
        console.log(error);
      });
      
          
    }
  return (
    <div>
        
            {
             showForm?
             (<div className='txt-lft mgn-left mgn-top pointer' onClick={()=>setShowForm(!showForm)}>
                <FontAwesomeIcon icon={faArrowLeft} className='clr-red'/>Cancel Request</div>) :
             <div className='txt-lft mgn-left mgn-top pointer' onClick={()=>setShowForm(!showForm)}>
                <FontAwesomeIcon icon={faPlus} className='clr-red'/>Create Request</div> 
}
        {
            showForm? (<div className="requestForm">
                <form onSubmit={submitHandler} className='form'>
                    <label htmlFor="blood" className='txt-left'>Blood Group</label>
                    <select className='form-fields' name='blood' id='blood' onChange={changeHandler} value={formValues.blood}>
                      <option value="" selected>Choose Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                    <label htmlFor="address" className='txt-left'>Address</label>
                    <input type="text" name='address' placeholder='Address' className='form-fields' onChange={changeHandler}/>
                    <label htmlFor="city" className='txt-left'>City</label>
                    <input type="text" name='city' placeholder='City' className='form-fields' onChange={changeHandler} value={formValues.city}/>
                    <label htmlFor='prescription' className='txt-left'>Attach Prescription</label>
                    <input name='prescription' type="file" className='form-fields file-input' placeholder='Attach Prescription' onChange={(e)=>setPrescription(e.target.files[0])}/>
                    <textarea name="message" id="message" cols="10" rows="3" placeholder='Leave a Message' className='form-fields' onChange={changeHandler} value={formValues.message}></textarea>
                    <button className='form-btn'>Submit</button>
                </form>
        </div>):null
        }
        
 

        <div className="requests">
        {
        requests?.map((req,ind)=>{
          const URL = 'http://localhost:8080/files/'+req.prescription
            return(
            <div className="card bloodCard requestCard" key={ind}>
                <div className="cardIcon clr-red bloodIcon">
                    <span className='bloodGroup'>{req.blood}</span> <FontAwesomeIcon icon={faDroplet}/>
                </div>
                    <p className='txt-right'>{req.city}</p>
                    <p className='txt-right'>{moment(req.createdAt).format("DD-MM-YYYY")}</p>
                    <div className="paraDiv">
                      <p className='txt-lft reqPara'>Address:  {req.address}</p>
                      <p className='txt-left reqPara'>Message: {req.message}</p>
                    </div>
                    <div className="navlist">
                        <a href={URL} target='_blank' className='btnPrescription'>Open Prescription</a>
                        {/* <a href="tel:+">Call</a> */}
                    </div>
            </div>
       )
        })}
        </div>
    </div>
  )
}

export default Request

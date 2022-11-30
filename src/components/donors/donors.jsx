import React from 'react'
import './donors_style.css'
import axios from 'axios'
//FONT AWESOM Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHouseUser,faHouseChimney,
         faDroplet,faUserFriends,faBarChart,
         faBarsProgress, faBarsStaggered, faFile,
         faCalendarPlus, faCheck, faPlus,
         faArrowLeft } from '@fortawesome/free-solid-svg-icons'
//React Imports 
import { useState, Dropdown } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

//Own Imports 
import { getDonorsAsync,setDonorAsync } from '../../store/donor/donorActions'
import { donorsSelector, isDonorsLoading } from '../../store/donor/donorSelector'
import { CardContainer } from './CardContainer'
import { url } from '../../configUrl'
import SideBar from '../sideBar'
import LoadingSpinner from '../spinner/Spinner'




const Donor = () => {
  


  const donors = useSelector(donorsSelector)
  const isLoading = useSelector(isDonorsLoading)
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
    const [showForm,setShowForm] = useState(false)
    const Initial_Values ={
        blood: '',
        age:'',
        gender: '',
        address:'',
        city: '',
      }
      const [formValues,setFormValues] = useState(Initial_Values)
      console.log('form values', formValues)
  
    const changeHandler = (e)=>{
        const {name,value} = e.target;
      setFormValues({...formValues, [name]: value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('address',formValues.address)
        formData.append('age',formValues.age)
        formData.append('blood',formValues.blood)
        formData.append('gender',formValues.gender)
        formData.append('city',formValues.city)
        dispatch(setDonorAsync(formData,token))
        setShowForm(false)
        setFormValues(Initial_Values)
    }


    useEffect(()=>{
      dispatch(getDonorsAsync())

}, [showForm])


return (
  <>
   {
        showForm?
        (<p className='txt-lft mgn-left mgn-top pointer' onClick={()=>setShowForm(!showForm)}>
          <FontAwesomeIcon icon={faArrowLeft} className='clr-red'/>Cancel</p>) :
        <p className='txt-lft mgn-left mgn-top pointer' onClick={()=>setShowForm(!showForm)}>
          <FontAwesomeIcon icon={faPlus} className='clr-red'/>Become a Donor</p> 
}
{
      showForm? (
      <div className="requestForm">
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
              <label htmlFor="gender" className='txt-left'>Gender</label>
              <select className='form-fields' name='gender' id='gender' onChange={changeHandler} value={formValues.gender}>
                <option value="" selected>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <label htmlFor="age" className='txt-left'>Age</label>
              <select className='form-fields' name='age' id='age' onChange={changeHandler} value={formValues.age}>
                <option value="" selected>Age</option>
                <option value="15-20">15-20</option>
                <option value="21-25">21-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36-40">36-40</option>
                <option value="41-45">41-45</option>
                <option value="46-50">46-50</option>
              </select>
              <label htmlFor="address" className='txt-left'>Address</label>
              <input type="text" name='address' placeholder='Address' className='form-fields' onChange={changeHandler}/>
              <label htmlFor="city" className='txt-left'>City</label>
              <input type="text" name='city' placeholder='City' className='form-fields' onChange={changeHandler} value={formValues.city}/>
              <button className='form-btn' type='submit'>Submit</button>
          </form>
  </div>):null
    }
    <div className="home">
     <SideBar/>
  <div className='container'>
     

      <div className="donors">
        {
          isLoading ? <LoadingSpinner/> :(
            donors?.map((donor,ind)=>{
                return(
                    <div className="donorCard" key={ind}>
                       <div className="img-blood"> 
                      {console.log('image url', url+'/images/'+donor.userId.imageUrl)}
                        <img src={url+'/images/'+donor.userId.imageUrl} alt='user image' className='donorImg'/>
                        <div>
                            <span className='bloodGroup'>{donor.blood}</span> <FontAwesomeIcon icon={faDroplet} className='clr-red bloodIcon'/>
                            <p className='txt-right'>{donor.city}</p>
                        </div>
                    </div>
                    <p className='txt-left mgn-0'>Age: {donor.age}</p>
                    <p className='txt-left mgn-0'>Gender: {donor.gender}</p>
                    <p className='txt-left mgn-0'>Address: {donor.address}</p>
                </div>
                )
            })
          )
        }
      </div>
     
 
        
        {/* <CardContainer cards={ cardsData} /> */}

    </div>
  </div>
  </>
  
   
  )
}

export default Donor

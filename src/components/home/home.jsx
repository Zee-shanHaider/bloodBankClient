import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouseUser,faHouseChimney,faDroplet,faUserFriends,faBarChart, faBarsProgress, faBarsStaggered, faFile, faCalendarPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import {faApple,faFacebook} from '@fortawesome/free-brands-svg-icons'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import SideBar from '../sideBar'

import './home_style.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home'>
     <SideBar/>
      <div className="container">
        <div className="dataContainer">
            <p className='txt-left border-btm h'> 
              Administrator part
            </p>
            <h6 className='txt-left h6'>
              Available Blood per group in Liters
            </h6>

            <div className="bloodCards">
                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                          <span className='bloodGroup'>A+</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red clr-red bloodIcon">
                          <span className='bloodGroup'>B+</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                        <span className='bloodGroup'>AB+</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                        <span className='bloodGroup'>O+</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon ">
                        <span className='bloodGroup'>A-</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                        <span className='bloodGroup'>B-</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                        <span className='bloodGroup'>AB-</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>
                  
                  <div className="card bloodCard">
                      <div className="cardIcon clr-red bloodIcon">
                        <span className='bloodGroup'>O-</span> <FontAwesomeIcon icon={faDroplet}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>
            </div>
            

            <div className="details">
                  <div className="card" onClick={()=>navigate('/donors')}>
                      <div className="cardIcon clr-blue">
                          <FontAwesomeIcon icon={faUserFriends}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Total Donors</p>
                  </div>

                  <div className="card" onClick={()=>navigate('/requests')}>
                      <div className="cardIcon clr-black" >
                          <FontAwesomeIcon icon={faBarsProgress}/>
                      </div>
                      <p  className='txt-lft'>35</p>
                      <p className='cardTxt'>Total Requests</p>
                  </div>

                  <div className="card">
                      <div className="cardIcon clr-red">
                          <FontAwesomeIcon icon={faBarsStaggered}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Today Requests</p>
                  </div>

                  <div className="card">
                      <div className="cardIcon">
                          <FontAwesomeIcon icon={faCheck}/>
                      </div>
                      <p className='txt-lft'>3</p>
                      <p className='cardTxt'>Request Approved</p>
                  </div>

            </div>
          </div>
      </div>
    </div>
  )
}

export default Home

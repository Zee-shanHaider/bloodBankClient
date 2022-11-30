import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouseUser,faHouseChimney,faDroplet,faUserFriends,faBarChart, faBarsProgress, faBarsStaggered, faFile, faCalendarPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
const SideBar = () => {
  return (
    <div className="sideBar">
          <Link className='link' to='/'>
            <FontAwesomeIcon icon={faHouseChimney} className='icon'/> Home
          </Link>
          <Link className='link' to='/donors'>
            <FontAwesomeIcon icon={faUserFriends} className='icon'/> Donors
          </Link>
          <Link className='link' to='#'>
            <FontAwesomeIcon icon={faDroplet} className='icon'/> Blood Donations
          </Link>
          <Link className='link' to='/requests'>
            <FontAwesomeIcon icon={faBarChart} className='icon'/> Requests
          </Link>
          <Link className='link' to='/users'>
            <FontAwesomeIcon icon={faUsers} className='icon'/> Users
          </Link>
      </div>
  )
} 

export default SideBar

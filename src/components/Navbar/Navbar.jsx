import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar_style.css'
const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <p className='para'>
              Blood Bank Management System
            </p>
            <div className="dropdown">
                <button className="dropdown-toggle bg-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Administrator
                </button>
                <ul className="dropdown-menu">
                  <li className='border-btm'><a className="dropdown-item" href="#">Action</a></li>
                  <li className='border-btm'><a className="dropdown-item" href="#">Another action</a></li>
                  <li className='border-btm'><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div> 

       
    </div>
  ) 
}

export default Navbar

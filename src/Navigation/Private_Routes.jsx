import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { userLoggedInSelector } from '../store/user/userSelector'
const PrivateRoutes = () => {
    const isLoggedIn = useSelector(userLoggedInSelector)
    console.log('is logged in', isLoggedIn)
  return (
   isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes

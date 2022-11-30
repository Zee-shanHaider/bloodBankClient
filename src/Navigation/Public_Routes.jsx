import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { userLoggedInSelector } from '../store/user/userSelector'
const PublicRoutes = () => {
    const isLoggedIn = useSelector(userLoggedInSelector)
  return (
    !isLoggedIn ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PublicRoutes

import React from 'react'
import Navbar from '../../src/components/Navbar/Navbar'
import Footer from '../../src/components/footer/footer'
import {Login} from '../../src/components/login/login'
const LoginScreen = () => {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default LoginScreen

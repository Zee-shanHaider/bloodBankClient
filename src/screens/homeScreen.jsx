import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/home/home'
import Footer from '../components/footer/footer'
const HomeScreen = () => {
  return (
    <div>
      <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default HomeScreen

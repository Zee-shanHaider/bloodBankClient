import React from 'react'
import Donor from '../components/donors/donors'
import Footer from '../components/footer/footer'
import Navbar from '../components/Navbar/Navbar'

const DonorScreen = () => {
  return (
    <div>
      <Navbar/>
      <Donor/>
      <Footer/>
    </div>
  )
}

export default DonorScreen

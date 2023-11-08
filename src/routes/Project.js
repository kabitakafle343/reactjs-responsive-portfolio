import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cbody from '../Components/Cbody'
import Pricing from '../Components/Pricing'
import Workhere from '../Components/Workhere'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Cbody pa="Some of my recent works" heading="PROJECTS"/>
      <Workhere/>
      <Pricing/>
   <Footer/>
    </div>
  )
}

export default Project

import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Cbody from '../Components/Cbody'

import Cpage from '../Components/Cpage'

const Contacts = () => {
  return (
    <div><Navbar/>
      <Cbody pa="Lets have a chat" heading="OUR CONTACTS"/>
      <Cpage/>
    <Footer/></div>
  )
}

export default Contacts
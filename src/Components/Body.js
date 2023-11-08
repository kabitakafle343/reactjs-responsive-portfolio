import React from 'react'
import { Link } from "react-router-dom";
import "./Bodystyle.css"
import hero from "../image/hero.jpg"

const Body = () => {
  return (

    <div>
    <div className='img'><img src={hero} alt='hh'></img></div>
    
    <div className='body'>
      <div>
<p>Hi,I'm Freelancer</p>
<h2>React Developer.</h2>

      </div>
      <div className='btnn'>
        <button className='btn'><Link to="/project">Project</Link></button>
        <button className='btn-1'><Link to="/contacts">Contacts</Link></button>
      </div>

    </div>
    </div>
  )
}

export default Body

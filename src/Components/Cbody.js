import React from 'react'
import "./Cbodystyle.css"
const Cbody = (props) => {
  return (
    <div className='mathi'>
   <div className='bodyy'>
    <h1>{props.heading}</h1>
    
   <p>{props.pa}</p>
   </div>

    </div>
  )
}

export default Cbody

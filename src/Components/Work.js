import React from 'react'
import { Link } from "react-router-dom";

const Work = (props) => {
  return (
    <div>
        <div className="c1">
            <img src={props.img} alt='i'></img>
        </div>
        <div className='y'>   <h2>{props.h}</h2>
            <p>{props.para}</p></div>
     
   
        <div className="c3">
            <button><Link to ={props.view}>View</Link></button>
            <button><Link to ={props.view}>Source</Link></button>
        </div>
    </div>
  )
}

export default Work

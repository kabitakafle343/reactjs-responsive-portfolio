import "./Pricingstyle.css";
import React from 'react'
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="g">
      <div className="g1">
        <h1>-Basics-</h1>
        <span className="bar">
        </span>
        <h1>$100</h1>
        <h3>-3 Days-</h3>
        <h3>-3 pages-</h3>
        <h3>-Featured-</h3>
        <h3>-Responsive-</h3>
        <h3>-3 Days-</h3>
        <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
      </div>
      <div className="g2">
        <h1>-Basics-</h1>
        <span className="bar">
        </span>
        <h1>$500</h1>
        <h3>-2 Days-</h3>
        <h3>-5 pages-</h3>
        <h3>-Featured-</h3>
        <h3>-REsponsive-</h3>
        <h3>-3 Days-</h3>
        <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
      </div>
      <div className="g3">
        <h1>-Basics-</h1>
        <span className="bar">
        </span>
        <h1>$800</h1>
        <h3>-5 Days-</h3>
        <h3>-8 pages-</h3>
        <h3>-Featured-</h3>
        <h3>-Responsive-</h3>
        <h3>-3 Days-</h3>
        <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
      </div>
    </div>
  )
}

export default Pricing

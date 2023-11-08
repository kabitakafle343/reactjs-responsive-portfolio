import "./Footerstyle.css";
import React from 'react'
import {FaHome} from "react-icons/fa"
import {MdDialerSip} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"



const Footer = () => {
  return (
    <div className="main">
      <div className="main1">
        <div className="ico"><span><FaHome size={20} style={{color:'#fff'}}/></span>
       <span><MdDialerSip size={20} style={{color:'#fff'}}/></span> 
      <span><AiOutlineMail size={20} style={{color:'#fff'}}/></span>  </div>
        <div className="pp"><h5>123 Housing Society.<br></br>Banglor</h5>
        <h5>1-23454-25545</h5>
        <h5>kabita@gamil.com</h5></div>
      </div>
      <div className="main2">
        <div><h3>About the company</h3>
        </div>
        <div className="ico2"><span><BsFacebook size={20} style={{color:'#fff'}}/></span>
       <span><AiFillTwitterCircle size={20} style={{color:'#fff'}}/></span> 
       <span><AiFillLinkedin size={20} style={{color:'#fff'}}/></span> 
      </div>
      </div>

    </div>
  )
}

export default Footer

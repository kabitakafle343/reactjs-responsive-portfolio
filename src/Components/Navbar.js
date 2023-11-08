import "./Navbarstyle.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

// import { FaBars ,FaTimes} from "react-icons/fa";

const Navbar = () => {
  // const [click, setClick] = useState(true);

const [color ,setColor]=useState(false);
const cahngeColor=()=>{
  if(window.scrollY>=40){
    setColor(true);
  }else{
    setColor(false);
  }
}
   
window.addEventListener("scroll",cahngeColor)

  return (
    <div className={color ? "header-bg":"header"}>
      <Link to="/"><h1>Portfolio.</h1></Link>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>

      {/* <div className="ic" onClick={()=>setClick(!click)
    }>
      {click ? <FaBars size={30} style={{ color: "#fff" }}/>:<FaTimes size={30} style={{ color: "#fff" }} /> };
      </div> */}
    
    </div>
  );
}

export default Navbar; 


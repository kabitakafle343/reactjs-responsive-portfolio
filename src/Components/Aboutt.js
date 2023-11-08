import "./Aboutstyle.css"
import a1 from "../image/hero.jpg"
import a2 from "../image/a1.jpg"
import React from 'react'

const Aboutt = () => {
  return (
    <div className="a">
    <div className="s">
  
        
<h1>About me?</h1>
<p>text · the main body of matter in a manuscript, book, newspaper, etc., as distinguished from notes, appendixes, headings, illustrations, etc. · the original ...</p>
       
       
        <button>About</button>
</div>
        
        <div className="im">
        <img src={a1} alt="k" className="im1"></img>
        <img src={a2} alt="j" className="im2"></img>
            
        
           </div> 
            </div>
     
 
  )
}

export default Aboutt

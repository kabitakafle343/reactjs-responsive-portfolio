import "./Cpagestyle.css";
import React from 'react'

const Cpage = () => {
  return (
    <div>
      <form>
      <div className="f">
    
        <label>name</label>
        <input type="text"></input>
        <label>email</label>
        <input type="text"></input>
        <label>subject</label>
        <input type="text"></input>
       
        <textarea rows="6" placeholder="type your message"></textarea>
        <button>Submit</button>
      
      </div>
      </form>
    </div>
  )
}

export default Cpage

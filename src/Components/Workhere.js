import "./Workherestyle.css";
import React from 'react';

import Work from "./Work";
import Workdata from "./Workdata";

const Workhere = () => {
  return (
    <div className="c">
    <div><span>PROJECTS</span></div>
      <div>
      {Workdata.map((val,index)=>{
        return(
        <Work key={index}
        h={val.h}
        para={val.para}
          img={val.img}
          view={val.view}
        />
        )
      })}

      </div>
    </div>
  )
}

export default Workhere

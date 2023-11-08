
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contacts from "./routes/Contacts";
import Project from "./routes/Project";

function App() {


  return (
  <>
   <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contacts" element={<Contacts/>}/>
    <Route  path="/project" element={<Project/>}/>
   </Routes> 
  </>
  );
}

export default App;

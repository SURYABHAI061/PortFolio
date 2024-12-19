import React, { useEffect }  from "react"
import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import Experinace from "./Component/Experinace";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import Aos from "aos";
import "aos/dist/aos.css"

const App =()=> {
   useEffect(()=>
  {
    Aos.init();

  },[])
  return (
    <>
      <div>
        <Navbar/>
       <div className="Container">
        <Home/>
         <Experinace/>
         <Skill/>
         <Project/>
        
       </div>
       <Contact/>
      </div>
      
    </>
  )
}

export default App

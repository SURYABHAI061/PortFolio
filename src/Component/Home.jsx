import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/Suraj.A (1).pdf";
import hero from "../Data/hero.json"
import Typed from "typed.js";




const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const option={
      strings:["WEL-COME TO MY PROFILE", "MY NAME IS SURAJ PATIL","I AM  FULLSTACK DEVELOPER"],
      typeSpeed:50,
      backSpeed:50,
      loop:true


    }
    const typed=new Typed(typedRef.current,option)

    return ()=>{
      typed.destroy()

    }
  },[])
  

  
  return (
    <>
    <div className="conatainer home" id="home">
      <div className="left">
     
        <h1 ref={typedRef}>
        </h1>
       
    <a href={pdf}download="resume.pdf" className="btn btn-outline-warning">Downloade resume</a>
    </div>
    <div className="right">
      <div className="img">
       <img src={`/assest/${hero.imgSrc}`} alt="hero" />
       </div>

    
    </div>
    </div>
       
    </>
  )
}

export default Home

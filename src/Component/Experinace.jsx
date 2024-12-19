import React from 'react'
import experience from "../Data/experience.json"

const Experinace = () => {
  return (
    <div className='container ex 'id='experiance'>
      <h1>OVERVIEW</h1>
      {
        experience.map((data)=>
        {
          return(
             <>
             <div key={data.id} className='ex-itme text-center my-5' data-aos="flip-right">
              <div className="left">
                  <img src={`/assest/${data.imageSrc}`} alt="" />
              </div>
              <div className="right">
               
                <h2>{data.role}</h2>
              
              
              </div>

             </div>
             </>
          )
        })
      }

    </div>
  )
}

export default Experinace

import React from "react";
import project from "../Data/projects.json";

const Project = () => {
  return (
    <>
      <div className="container project my-4" data-aos="flip-up" id="project">
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {
          project.map((data) => (
            <>
              <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3 mx-4">
                <div className="card bg-dark text-light" style={{ width: "18rem",border:"1px solid yellow",boxShadow:"5px 5px 10px 10px rgba(101,175,10,0.5)" }}>
                  <div className="img d-flex justify-content-center align-content-center p-3" >
                  <img src={`/assest/${data.imageSrc}`} className="card-img-top " alt="..."style={{width:"250px", height:"200px",borderRadius:"10px",border:"2px solid yellow",cursor:"pointer"}} />
                  </div>
                  
                  <div className="card-body text-center" >
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      {data.description}
                    </p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Demo
                    </a>
                    <a href={data.source} className="btn btn-warning">
                    Source
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;

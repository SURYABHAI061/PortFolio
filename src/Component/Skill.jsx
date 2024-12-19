import React from "react";
import skills from "../Data/skills.json";

const Skill = () => {
  return (
    <>
      <div className="container Skills 
      "data-aos="flip-left" id="skill"> 
        <h1>SKILLS</h1>
        <div className="itms">
        {skills.map((data) => (
          <>
            <div className="itme" key={data.id}>
                <img src={`/assest/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
          </>
        ))}
        </div>
      </div>
    </>
  );
};

export default Skill;

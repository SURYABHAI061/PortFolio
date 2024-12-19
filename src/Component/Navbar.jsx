import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Container nav_bar " 
      data-aos="zoom-out-left"
      data-aos-duration="1000">
        <div className="left nav_item">PortFolio</div>
        <div className="right">
          <a href="#home" className="nav_item">Home</a>
          <a href="#experiance" className="nav_item">Experiance</a>
          <a href="#skill" className="nav_item">Skill</a>
          <a href="#project" className="nav_item">Project</a>
          <a href="#contact" className="nav_item">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Projects.css";

const Projects = ({ prj1, prj2, prj3 }) => {
  return (
    <div>
      <h1>Projects.</h1>
      <p
        onClick={() => {
          prj1(false);
          prj2(true);
          prj3(false);
        }}
      >
        Desginer Nation
      </p>
      <p
        onClick={() => {
          prj1(false);
          prj2(false);
          prj3(true);
        }}
      >
        Advanced Insurnace Online
      </p>
    </div>
  );
};

export default Projects;

import React from "react";
import "./Projects.css";

const Projects = ({ prj1, prj2, prj3, funprj1, funprj2 }) => {
  return (
    <div>
      <h1>Projects.</h1>
      <p
        onClick={() => {
          prj1(false);
          prj2(false);
          prj3(true);
          funprj1(false);
          funprj2(false);
        }}
      >
        Advanced Insurnace Online
      </p>
      <p
        onClick={() => {
          prj1(false);
          prj2(true);
          prj3(false);
          funprj1(false);
          funprj2(false);
        }}
      >
        Desginer Nation
      </p>
      <h1>Fun Projects.</h1>
      <p
        onClick={() => {
          prj1(false);
          prj2(false);
          prj3(false);
          funprj1(true);
          funprj2(false);
        }}
      >
        Netflix Clone
      </p>
      <p
        onClick={() => {
          prj1(false);
          prj2(false);
          prj3(false);
          funprj1(false);
          funprj2(true);
        }}
      >
        Linkedin Clone
      </p>
    </div>
  );
};

export default Projects;

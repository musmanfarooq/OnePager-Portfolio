import React, { useState } from "react";
import ProjectProps from "../props/ProjectProps";
import "./HeroSection.css";
import Projects from "./projects/Projects";
import Welcome from "./Welcome";

export const HeroSection = () => {
  const [main, setMain] = useState(true);
  const [dNation, setDNation] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [netflix, setNetflix] = useState(false);
  const [linkedin, setLinkedin] = useState(false);

  return (
    <div className="container">
      <div className="herosection">
        <div className="herosection__intro">
          {main && <Welcome />}
          {insurance && (
            <ProjectProps
              title="Advanced Insurance Online"
              desc1="An online website that will help you with your insurnace i.e. for automobile, life and medical. User will fill in the form to give an estimate for insurance."
              desc2="After completing the form the support team will contact you for furthur information and will tell you about all the necessary detail."
              livelink="https://advancedinsonline.com/"
            />
          )}
          {dNation && (
            <ProjectProps
              title="Desginer Nation"
              desc1="An Ecommerce website for clothing line. The Frontend of the website is developed in Custom Html/CSS and JavaScripts. The backend is developed in Php Larvel with SQL used as a databse."
              livelink="https://dev.designersnation369.com/"
            />
          )}
          {netflix && (
            <ProjectProps
              title="Netflix Clone"
              desc1="A Netflix Clone that has a login and signup and use TMDB movie API to display all the movies."
              livelink="https://netflix-clone-b052e.web.app/"
            />
          )}
          {linkedin && (
            <ProjectProps
              title="Linkedin Clone"
              desc1="Linkedin Clone that has a fully working login and signup page with firebase database connected to it, so that it can show all the post to the user. "
              livelink="https://linkedin-clone-949a7.web.app/"
            />
          )}
        </div>
        <div className="herosection__projects">
          <Projects
            prj1={setMain}
            prj2={setDNation}
            prj3={setInsurance}
            funprj1={setNetflix}
            funprj2={setLinkedin}
          />
        </div>
      </div>
    </div>
  );
};

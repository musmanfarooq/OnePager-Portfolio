import React, { useState } from "react";
import "./HeroSection.css";
import DesginerNation from "./projects/DesginerNation";
import Insurance from "./projects/Insurance";
import Projects from "./projects/Projects";
import Welcome from "./projects/Welcome";

export const HeroSection = () => {
  const [main, setMain] = useState(true);
  const [dNation, setDNation] = useState(false);
  const [insurance, setInsurance] = useState(false);

  return (
    <div className="container">
      <div className="herosection">
        <div className="herosection__intro">
          {main && <Welcome />}
          {dNation && <DesginerNation />}
          {insurance && <Insurance />}
        </div>
        <div className="herosection__projects">
          <Projects prj1={setMain} prj2={setDNation} prj3={setInsurance} />
        </div>
      </div>
    </div>
  );
};

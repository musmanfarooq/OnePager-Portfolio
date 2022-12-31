import React from "react";
import "./HeroSection.css";

export const HeroSection = () => {
  return (
    <div className="container">
      <div className="herosection">
        <div className="herosection__intro">
          <h1>Welcome.</h1>
          <p>
            My name is Muhammad Usman Farooq, I am a Frontend Developer based in
            Islamabad, Pakistan. Over the years I have developed many different
            types of website including landing pages and full frontend for a
            ecommerence website.
          </p>
          <p>
            I'm passionate about cutting-edge, pixel-perfect, beautiful
            interfaces and intuitively implemented UX.
          </p>
          <a href="mailto:m.usmnanfarooq753@gmail.com">
            <button>Contact Me</button>
          </a>
          <button>Resume</button>
        </div>
        <div className="herosection__projects">
          <h1>Projects.</h1>
          <ul>
            <a herf="#">
              <li>Desginer Nation</li>
            </a>
            <a herf="#">
              <li>Advanced Insurnace Online</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

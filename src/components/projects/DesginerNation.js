import React from "react";
import "./Welcome.css";
import link from "../../pictures/link.png";

const DesginerNation = () => {
  return (
    <div>
      <h1>Desginer Nation</h1>
      <p>
        My name is Muhammad Usman Farooq, I am a Frontend Developer based in
        Islamabad, Pakistan. Over the years I have developed many different
        types of website including landing pages and full frontend for a
        ecommerence website.
      </p>
      <p>
        I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
        and intuitively implemented UX.
      </p>
      <a href="https://dev.designersnation369.com/" target="blank">
        <button>
          <div className="button__flex">
            Live Link
            <img className="button__download" src={link} alt="link icon" />
          </div>
        </button>
      </a>
    </div>
  );
};

export default DesginerNation;

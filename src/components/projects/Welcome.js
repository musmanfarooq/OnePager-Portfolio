import React from "react";
import "./Welcome.css";
import download from "../../pictures/download.png";
import mail from "../../pictures/mail.png";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome.</h1>
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
      <a href="mailto:m.usmnanfarooq753@gmail.com">
        <button>
          <div className="button__flex">
            Contact Me
            <img className="button__download" src={mail} alt="mail icon" />
          </div>
        </button>
      </a>
      <button>
        <div className="button__flex">
          Resume/CV
          <img
            className="button__download"
            src={download}
            alt="download icon"
          />
        </div>
      </button>
    </div>
  );
};

export default Welcome;
import React from "react";
import link from "../../pictures/link.png";

const Insurance = () => {
  return (
    <div>
      <h1>Advanced Insurance Online</h1>
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
      <a href="https://advancedinsonline.com/" target="blank">
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

export default Insurance;

import React from "react";
import "./Welcome.css";
import download from "../pictures/download.png";
import mail from "../pictures/mail.png";

const Welcome = () => {
  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch("Usman Farooq Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Usman Farooq Resume.pdf";
        alink.click();
      });
    });
  };

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
      <button onClick={downloadPDF}>
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

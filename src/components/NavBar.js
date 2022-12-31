import React from "react";
import "./NavBar.css";
import github from "../pictures/github.svg";
import mail from "../pictures/mail.png";


const NavBar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">Logo</div>
        <div className="navbar__links">
          <a href="mailto:m.usmanfarooq753@gmail.com">
            <img
              className="navbar__mail"
              src={mail}
              alt="mail"
            />
          </a>
          <a href="https://github.com/musmanfarooq" target="blank">
            <img
              className="navbar__github"
              src={github}
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

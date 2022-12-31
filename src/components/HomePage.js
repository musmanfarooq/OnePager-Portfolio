import React from "react";
import Footer from "./Footer";
import { HeroSection } from "./HeroSection";
import "./HomePage.css";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="conatiner">
      <svg className="top__corner" height="300" width="300">
        <path
          d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
          fill="grey"
        />
      </svg>
      <NavBar />
      <HeroSection />
      <Footer />
      {/* <svg className="bottom__corner" height="300" width="300">
        <path
          d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
          fill="grey"
        />
      </svg> */}
    </div>
  );
};

export default HomePage;

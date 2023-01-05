import "./ProjectProps.css";
import link from "../pictures/link.png";

const ProjectProps = ({ title, desc1, desc2, livelink }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>The Live Link of the website is give below:</p>
        <a href={livelink} target="blank">
          <button>
            <div className="button__flex">
              Live Links
              <img className="button__download" src={link} alt="mail icon" />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectProps;

import "./about.css";
import html from "../../../src/Image/skills/html.png";
import css from "../../../src/Image/skills/css.png";
import js from "../../../src/Image/skills/js.jpg";
import json from "../../../src/Image/skills/json.png";
import jquery from "../../../src/Image/skills/jquery.png";
import bootstrap from "../../../src/Image/skills/bootstrap.png";
import react from "../../../src/Image/skills/react.png";
import redux from "../../../src/Image/skills/redux.png";
import myPhoto from "../../../src/Image/my Photo.jpg";
import styledc from "../../../src/Image/skills/styledc.png";
import npm from "../../../src/Image/skills/npm.svg";
import vite from "../../../src/Image/skills/vite.png";
import figma from "../../../src/Image/skills/figma.svg";
function About() {
  let skills = [
    {
      name: "HTML5",
      img: html,
    },
    {
      name: "CSS3",
      img: css,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "JSON",
      img: json,
    },
    {
      name: "jQuery",
      img: jquery,
    },
    {
      name: "Bootstrap",
      img: bootstrap,
    },
    {
        name: "npm",
        img: npm
    },
    {
      name: "React",
      img: react,
    },
    {
        name: "Vite",
        img: vite
    },
    {
      name: "Redux",
      img: redux,
    },
    {
      name: "Styled Components",
      img: styledc
  },
  {
      name: "Figma",
      img: figma
  }
  ];
  return (
    <>
    <div className="about">
      <section className="right-left">
        <section className="left-section">
          <img src={myPhoto} alt="Waheed Kadry, waheedonly256" />
          <div className="interiduce-me">
            <p>
              <b>Name:</b> Waheed Safwat Kadry
            </p>
            <p>
              <b>Birth Date:</b> June 17th 1999
            </p>
            <p>
              <b>Phone Number:</b> +20 115 804 3496
            </p>
            <p>
              <b>Gmail:</b> waheedonly256@gmail.com
            </p>
            <p>
              <b>Address:</b> Zagazig, El Sharqia, Egypt
            </p>
          </div>
        </section>
        <section className="right-section">
          <h2>
            Who am I <span className="icon-question"></span>
          </h2>
          <p>
            Hello there, My name is Waheed Kadry, I'm a 1-year experienced
            React.js Frontend Web Developer who enjoys building everything with
            JavaScript.
          </p>
          <p>
            In this duration, I have learned a lot of technologies, created many
            cool websites, collaborated with great developers .
          </p>
          <p>
            So I'm always seeking to have an opportunity that matches my skills,
            to make the best use of all what I have learned.
          </p>
          <h2>Education :-</h2>
          <p>
            I finished my studies in an industrial secondary school, electronics
            department, in 2017
          </p>

          <h2>Certificates :-</h2>
          <p>1&#41; ICDL</p>
          <p>2&#41; Microsoft Office</p>
          <p>3&#41; Human Development (self esteem)</p>
          <p>4&#41; English (2 Levels)</p>
          <p>All of the above from Unix Academy</p>
        </section>
      </section>
      <section>
        <h2 className="text-center">My Skills</h2>
        <section className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div>
                <img src={skill.img} alt={skill.name} />
              </div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </section>
      </section>
    </div>
 
  </>);
}

export default About;

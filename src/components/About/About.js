import React from "react";
import "./About.css";
import api from "../../assets/icons/api.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";
import javascript from "../../assets/icons/javascript.svg";
import backend from "../../assets/icons/backend.svg";
import SkillCard from "../SkillCard/SkillCard";
const skills = [
  {
    icon: api,
    title: "Knowledge Of Api",
    about:
      "I have a very good knowledge of API endpoints handling and managing efficiently.",
  },
  {
    icon: computer,
    title: "Front-end Development",
    about:
      "I can build a scalable and pixel perfect SPA using HTML, CSS and React js",
  },
  {
    icon: repair,
    title: "Responsiveness",
    about:
      "I can made fully responsive.They can be viewed in all kinds of devices like tablet,desktop,laptops,mobiles,etc.",
  },
  {
    icon: puzzle,
    title: "Different Layout",
    about: "I provide different layouts as per needs of the customers.",
  },
  {
    icon: backend,
    title: "Make It Simple",
    about:
      "We maintain our code as simple as possible, so that it can be understood by all.",
  },
  {
    icon: javascript,
    title: "Unique Design",
    about:
      "I provide a natural feeling unique design that fulfills the goals of the customers using the library of javascript.",
  },
];
const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Hey there!! Iam the Front End Developer. I basically develop websites in
        html, css, bootstrap, javascript. I am also the React Developer. In this
        tech era, i can also develop websites using the current front end tech
        like React js (Awesome js library)...
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">My Speciality</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

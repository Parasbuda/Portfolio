import React from "react";
import "./About.css";

import SkillCard from "../SkillCard/SkillCard";
import {motion} from "framer-motion"
import skills from "../data/about_data"
const About = () => {
  const about_variant={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:0.2,duration:0.6,
    }
    },
    exit:{
        opacity:0,
        transition:{
            ease:"easeInOut"
        }
    }
  }
  return (
    <motion.div className="about"
    variants={about_variant}
       initial="hidden"
       animate="visible"
       exit="exit"
    >
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
            <SkillCard skill={skill} key={skill.title}/>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;

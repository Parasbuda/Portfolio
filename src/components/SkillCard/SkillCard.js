import React from "react";
import "./SkillCard.css";
const SkillCard = ({skill:{icon,title,about}}) => (
  <div className="col-lg-6" key={icon}>
    <div className="skill-card">
      <img src={icon} alt="icon" className="skill-card__icon" />
      <div className="skill-card-body">
        <h6 className="skill-card__content">{title}</h6>
        <h6 className="skill-card__content">{about}</h6>
      </div>
    </div>
  </div>
);

export default SkillCard;

import React from 'react'
import "./Resume.css"
import react from "../../assets/icons/react.svg"
import Bar from "../Bar/Bar"
const languages=[
    {
        icon:react,
        name:"HTML",
        level:"90"
    },
    {
        icon:react,
        name:"React Js",
        level:"90"
    },
    {
        icon:react,
        name:"Formik",
        level:"80"
    },
    {
        icon:react,
        name:"Redux",
        level:"80"
    },
   
    {
        icon:react,
        name:"Axios",
        level:"80"
    },
    {
        icon:react,
        name:"Hook",
        level:"75"
    },
   

]

const styling=[
    {
        icon:react,
        name:"CSS",
        level:"90"
    },
    {
        icon:react,
        name:"Bootstrap",
        level:"85"
    },
    {
        icon:react,
        name:"Material-Ui",
        level:"60"
    },
    {
        icon:react,
        name:"Git",
        level:"70"
    },
    {
        icon:react,
        name:"NPM",
        level:"70"
    },
]
const Resume = () => {
    return (
       <div className="container resume">
           <div className="row">
               <div className="col-lg-6 resume-card">
                <h4 className="resume-card__heading">Education</h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Bechulor in Computer Science and Information Technology (Bsc.CSIT)
                    </h5>
                    <p className="resume-card__name">
                         Siddhanath Science Campus (2016-2020)
                    </p>
                    <p className="resume-card__details">I have passed my Bsc CSIT degree.</p>
                </div>
               </div>
               <div className="col-lg-6 resume-card">
                <h4 className="resume-card__heading">Experience</h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                       Web Developer (React js) (2020-currently)
                    </h5>
                    <p className="resume-card__name">
                        Meraki Tech Pvt. Ltd.
                    </p>
                    <p className="resume-card__details">Iam current working as a React Developer.</p>
                </div>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-6 resume-languages">
                   <h5 className="resume-language__heading">
                       Language and Library
                   </h5>
                   <div className="resume-language__body mt-3">
                       {
                           languages.map(language=>
                            <Bar give={language}/>)
                       }
                   </div>
               </div>
               <div className="col-lg-6 resume-languages">
                   <h5 className="resume-language__heading">
                       Styling and Tools
                   </h5>
                   <div className="resume-language__body mt-3">
                       {
                           styling.map(sty=>
                            <Bar give={sty}/>)
                       }
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Resume

import React from 'react'
import "./Resume.css"

import Bar from "../Bar/Bar"
import {motion} from "framer-motion"
import {languages,styling} from "../data/resume_data"
const Resume = () => {

    const resume_variant={
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
       <motion.div className="container resume"
       variants={resume_variant}
       initial="hidden"
       animate="visible"
       exit="exit"
       >
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
       </motion.div>
    )
}

export default Resume

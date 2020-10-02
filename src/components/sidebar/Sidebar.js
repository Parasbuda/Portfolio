import React from 'react'
import "./Sidebar.css"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import github from "../../assets/icons/github.svg"
import pin from "../../assets/icons/pin.svg"
import tie from "../../assets/icons/tie.svg"
import resume from "../../assets/resume.pdf"
import {motion} from "framer-motion"

const Sidebar = () => {
    const handleEmail=()=>{
        window.open("mailto:parasbuda1234@gmail.com")
    }

    const sidebar_variant={
        hidden:{
          x:"-20vh",
          
        },
        visible:{
          x:0,
          transition:{
              delay:0.1,duration:0.5,type:"spring"
          }
        }
      }
    return (
        <motion.div className="sidebar"
        variants={sidebar_variant}
        initial="hidden"
        animate="visible"
        >
           <img src="me.jpg" alt="avatar" className="sidebar__avatar"/>
           <div className="sidebar__name">
               Paras <span>Buda</span>
           </div>
           <div className="sidebar__item sidebar__title">
               Web Developer (React js)
           </div>
           <a href={resume} download="resume.pdf">
               <div className="sidebar__item sidebar__resume">
                   <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
               </div>
           </a>
           <figure className="sidebar__social-icons my-2">
               <a href="https://www.facebook.com/paras.buda.31/">
                   <img src={facebook} alt="facebook" className="sidebar__icon mr-3"/>
               </a>
               <a href="https://www.instagram.com/parasbuda123/">
                   <img src={instagram} alt="instagram" className="sidebar__icon"/>
               </a>
           </figure>
           <div className="sidebar__contact">
               <div className="sidebar__item sidebar__github">
                   <a href="https://github.com/Parasbuda">
                       <img src={github} alt="github" className="sidebar__icon mr-3"/>Github
                   </a>
               </div>
               <div className="sidebar__location">
                   <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                   Mahendranagar, Kanchanpur</div>
               <div className="sidebar__item">parasbuda1234@gmail.com</div>
               <div className="sidebar__item">9848224791/9812774872</div>
           </div>
           <div className="sidebar__item sidebar__email" onClick={handleEmail}>
            Email Me
           </div>
         </motion.div>
    )
}

export default Sidebar

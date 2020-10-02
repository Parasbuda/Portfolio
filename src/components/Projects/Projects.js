import React, { useState } from 'react';
import data_projects from '../data/projects_data'
import ProjectCard from '../ProjectCard/ProjectCard';
import "./Projects.css"

const Projects = () => {
    const [projects, setProjects] = useState(data_projects)

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div onClick={() => setProjects(data_projects)}>All</div>
                <div onClick={() => handleFilterCategory('react')}>React</div>
                <div onClick={() => handleFilterCategory('ecommerce')}>Ecommerce</div>
                <div onClick={() => handleFilterCategory('hotel')}>Hotel</div>
                <div onClick={() => handleFilterCategory('travel')}>Travel</div>
                <div onClick={() => handleFilterCategory('entertainment')}>Entertainment</div>
                <div onClick={() => handleFilterCategory('news')}>News</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;

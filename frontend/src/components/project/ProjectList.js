import React, { useState, useEffect, useContext } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({projects}){

    const [projectData, setProjectData] = useState([]);

    return (
        <>
        {projects.map((item) =>{
            <ProjectCard data = {item}/>

        })
        
        }
    
    </>)
}
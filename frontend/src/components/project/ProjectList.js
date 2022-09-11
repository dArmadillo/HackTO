import React, { useState, useEffect, useContext } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({projects}){   

    return (
        <>
        {projects.map((item) =>{
            <ProjectCard data = {item}/>

        })
        
        }
    
    </>)
}
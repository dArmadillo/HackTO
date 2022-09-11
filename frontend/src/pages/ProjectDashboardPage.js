
import React, { useState, useEffect, useContext } from 'react';
import ProjectCard from '../components/project/ProjectCard';
import ProjectFilter from '../components/project/ProjectFilter';
import './ProjectDashboardPage.scss'


export default function ProjectDashboardPage(){
    const [projectData, setProjectData] = useState([]);
    
    return(
        <div style={{ background: '#EDE7DF',
        height: '100vh',
        padding: '1rem'}}>
        <div className='dashboardCont'>
            <div className="projectList">
                {/* Change to project list */}
                <ProjectCard/>
            </div>
                
            <div className="filterCont">
                <ProjectFilter/>
            </div>
    </div>
    </div>)
}
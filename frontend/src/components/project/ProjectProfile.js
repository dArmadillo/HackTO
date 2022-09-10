import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import React, { useState, useEffect, useContext } from 'react';
import './ProjectStyling.scss'


function ProjectLead(props) {
  return (
    <div style={{
      background: 'white',
      width: '15vw',
      borderRadius: '35px',
      padding: '2rem'
    }}>
      <Typography sx={{ fontSize: 18, fontWeight: 900, marginBottom: '1rem' }} color="text.primary" gutterBottom>
        Project Lead
      </Typography>
      <div class='d-flex'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div class='d-flex flex-column justify-content-center mx-2'>
          <Typography sx={{ fontWeight: 900, fontSize: 13, lineHeight: 1 }} color="text.primary">
            {props.projectTeamLeadFullname}
          </Typography>
          <Typography sx={{ fontSize: 13, lineHeight: 1}} color="text.secondary">
            {props.projectTeamLeadJobTitle}
          </Typography>
          <Typography sx={{ fontSize: 13, lineHeight: 1}} color="text.primary">
            {props.projectTeamLeadPronouns}
          </Typography>
        </div>
      </div>
      <div class="w-100 d-flex justify-content-center mt-3">
        <button type="button" class="action-btn">CONTACT</button>
      </div>
    </div>
  )
}

function ProjectRequirements(props) {
  return (
    <div style={{
      background: 'white',
      width: '15vw',
      borderRadius: '35px',
      padding: '2rem'
    }}>
      <Typography sx={{ fontSize: 18, marginBottom: '1rem' }} color="text.primary" gutterBottom>
        Requirements
      </Typography>
      <div>
        <ul>
          {props.requirements.map(requirement => <li>{requirement}</li>)}
        </ul>
        <p>{props.requirements.length == 0 ? 'No requirements' : ''}</p>
      </div>
      <div class="w-100 d-flex justify-content-center mt-3">
        <button type="button" class="action-btn">Join project</button>
      </div>
    </div>
  )
}

function ProjectInformation(props) {
  return (
    <div style={{
      background: 'white',
      width: '75vw',
      height: '100%',
      borderRadius: '54px',
      padding: '3rem'
    }}>
      <Typography sx={{ fontSize: 25, textAlign: 'center', fontWeight: 900 }} color="text.primary" gutterBottom>
        {props.projectTitle}
      </Typography>
      <div class="d-flex m-4">
        <img class="w-25" src="props.logo" alt="Project Logo"></img>
        <div>
          <p>Signup deadline: {props.projectSignupDeadline}</p>
          <p>Project start date: {props.projectStartDate}</p>
          <p>Status: {props.projectStatus}</p>
        </div>
      </div>

      <div class="mb-5">
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Description
        </Typography>
        <hr/>
        <p>{props.projectDescription}</p>
      </div>


      <div class="mb-5">
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Objectives
        </Typography>
        <hr/>
        <div>
          <ul>
            {props.projectObjective.map(obj => <li>{obj}</li>)}
          </ul>
          <p>{props.projectObjective.length === 0 ? 'No project objectives' : ''}</p>
        </div>
      </div>


      <div class="mb-5">
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Accomodations
        </Typography>
        <hr/>
        <div>
          {props.projectAccomodations.map(accomodation => <button type="button" class="btn btn-warning list-btn">{accomodation}</button>)}
        </div>
        <p>{props.projectAccomodations.length === 0 ? 'No project accomodations' : ''}</p>
      </div>

      <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
        Skills applied
      </Typography>
      <hr/>
      <div>
        {props.projectSkillsApplied.map(skill => <button type="button" class="btn btn-warning list-btn">{skill}</button>)}
      </div>
      <p>{props.projectSkillsApplied.length === 0 ? 'No project skills applied' : ''}</p>
    </div>
  );
}

export default function ProjectProfile() {
  const [projectTitle, setProjectTitle] = useState('N/A');
  const [projectSignupDeadline, setProjectSignupDeadline] = useState('N/A');
  const [projectStartDate, setProjectStartDate] = useState('N/A');
  const [projectStatus, setProjectStatus] = useState('N/A');
  const [projectDescription, setProjectDescription] = useState('N/A');
  const [projectObjective, setProjectObjective] = useState([]);
  const [projectAccomodations, setProjectAccomodations] = useState([]);
  const [projectSkillsApplied, setProjectSkillsApplied] = useState([]);

  const [projectTeamLeadFullname, setProjectTeamLeadFullname] = useState('John Doe');
  const [projectTeamLeadJobTitle, setProjectTeamLeadJobTitle] = useState('Software Engineer');
  const [projectTeamLeadPronouns, setProjectTeamLeadPronouns] = useState('She/Her');

  const [projectRequirements, setProjectRequirements] = useState([]);

  return (
    <div  style={{
      background: '#EFEFEF',
      height: '100vh',
      padding: '3rem'
    }} class='d-flex justify-content-around'>
      <ProjectInformation
        projectTitle={projectTitle}
        projectSignupDeadline={projectSignupDeadline}
        projectStartDate={projectStartDate}
        projectStatus={projectStatus}
        projectDescription={projectDescription}
        projectObjective={projectObjective}
        projectAccomodations={projectAccomodations}
        projectSkillsApplied={projectSkillsApplied}
      />
      <div>
        <div class="mb-3">
          <ProjectLead
            projectTeamLeadFullname={projectTeamLeadFullname}
            projectTeamLeadJobTitle={projectTeamLeadJobTitle}
            projectTeamLeadPronouns={projectTeamLeadPronouns}
          />
        </div>
        <ProjectRequirements
          requirements={projectRequirements}
        />
      </div>
    </div>
  );
}
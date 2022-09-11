import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Avatar } from '@mui/material';
import './HeaderComponent.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AmazonLogo from '../assets/images/AmazonLogo.png'
import AmazonLogoExplore from '../assets/images/Explore.png'

export default function NavTabs(props) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Navbar>
    <div class="w-100 d-flex justify-content-between">
      <Navbar.Brand href="#home">
        <img style={{ width: '90%' }}
          src={AmazonLogo}></img>
        <img style={{ 
          marginLeft: '-93px',
          marginBottom: '-54px',
          width: '118px',
        }} src={AmazonLogoExplore}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div class="d-flex align-items-center">
        <Nav>
          <Nav.Link href="#current-projects">Current Projects</Nav.Link>
          |
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
          <p class="welcome-text">Welcome {props.name}!</p>
        <div style={{padding: 20}}>
          <Avatar alt="Remy Sharp" src={props.profileImageUrl} />
        </div>

      </div>
    </div>
  </Navbar>
  );
}
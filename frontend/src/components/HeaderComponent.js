import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './HeaderComponent.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AmazonLogo from '../assets/images/AmazonLogo.png'
import AmazonLogoExplore from '../assets/images/Explore.png'

export default function NavTabs() {
  let name = 'Candy';

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
          <Nav.Link href="#home">Applications</Nav.Link>
          |
          <Nav.Link href="#link">Current Projects</Nav.Link>
          |
          <Nav.Link href="#">Portfolio</Nav.Link>
        </Nav>
        <div>
          <p class="welcome-text">Welcome {name}!</p>
        </div>
      </div>
    </div>
  </Navbar>
  );
}
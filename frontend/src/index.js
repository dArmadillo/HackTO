import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectCard from './components/project/ProjectCard'
import HeaderComponent from './components/HeaderComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderComponent/>
    <ProjectCard />
    
  </React.StrictMode>
);

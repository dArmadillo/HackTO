import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectCard from './components/project/ProjectCard'

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectCard />
    
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectCard from './components/project/ProjectCard'
import ProjectProfile from './components/project/ProjectProfile'
import HeaderComponent from './components/HeaderComponent'
import ProfilePage from './components/user/ProfilePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectDashboardPage from './pages/ProjectDashboardPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderComponent/>
    <ProjectDashboardPage/>
    
  </React.StrictMode>
);

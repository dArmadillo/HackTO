import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectCard from './components/project/ProjectCard'
import ProjectProfile from './components/project/ProjectProfile'
import HeaderComponent from './components/HeaderComponent'
import ProfilePage from './components/user/ProfilePage';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderComponent name="Victoria" profileImageUrl = "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"/>
    <ProfilePage profileImageUrl = "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg" name="Victoria Diana" pronouns="She/Her" email='victoriadaiana22@gmail.com' managerNotes="test test"/>
  </React.StrictMode>
);

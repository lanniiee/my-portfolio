import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects.jsx';
import Experiences from './pages/Experiences/Experiences.jsx';
import Skills from './pages/Skills/Skills.jsx';
import {projectsArr} from './data/project';

function App() {

  const projectArr = projectsArr.map(project => project);

  return (
    <div className='App'>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path="*" element={<Home imgArr={projectArr} />} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects projectArr={projectArr} />} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>    
    </div>
  );
}

export default App;

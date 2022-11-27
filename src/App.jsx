import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Nav from './components/Nav/Nav';
import Projects from './pages/Projects/Projects.jsx';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>    
    </div>
  );
}

export default App;

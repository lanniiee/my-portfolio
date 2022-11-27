import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home.jsx';
import AboutMe from './pages/AboutMe/AboutMe.jsx';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/aboutme" element={<AboutMe/>} />
    </Routes>
  );
}

export default App;

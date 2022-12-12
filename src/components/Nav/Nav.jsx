import "./Nav.scss";
import Icon from "../Icon/Icon";
import {  NavLink } from "react-router-dom";
import WaterMark from '../WaterMark/WaterMark';

const Nav = () => {
    
    return (
        <div className="nav">
            <NavLink to={"/"}>
                <Icon/>
            </NavLink>
            <WaterMark />
            <div className="nav__links">

                <NavLink to={"/"} className={({isActive}) => 
                    isActive ? "nav__links--home-active" : "nav__links--home"} >
                <h4>Home</h4>
                </NavLink>

                <NavLink to={"/my-portfolio/aboutme"} className={({isActive}) => 
                    isActive ? "nav__links--aboutme-active" : "nav__links--aboutme"}>
                <h4>About Me</h4>
                </NavLink>

                <NavLink to={"/my-portfolio/projects"} className={({isActive}) => 
                    isActive ? "nav__links--projects-active" : "nav__links--projects"}>
                <h4>Projects</h4>
                </NavLink>


                <NavLink to={"/my-portfolio/skills"} className={({isActive}) => 
                    isActive ? "nav__links--skills-active" : "nav__links--skills"}>
                <h4>Skills</h4>
                </NavLink>


                <NavLink to={"/my-portfolio/experiences"} className={({isActive}) => 
                    isActive ? "nav__links--experiences-active" : "nav__links--experiences"}>
                <h4>Experiences</h4>
                </NavLink>
            </div>
            <hr className="nav__divider"/>

        </div>
    )
}

export default Nav;
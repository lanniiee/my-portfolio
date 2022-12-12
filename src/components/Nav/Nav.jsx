import "./Nav.scss";
import Icon from "../Icon/Icon";
import {  NavLink } from "react-router-dom";
import WaterMark from '../WaterMark/WaterMark';

const Nav = () => {
    
    return (
        <div className="nav">
                <Icon/>
            <WaterMark />
            <div className="nav__links">

                <NavLink to={"/"}className="nav__links--home" >
                <h4>Home</h4>
                </NavLink>

                <NavLink to={"/aboutme"} className="nav__links--aboutme">
                <h4>About Me</h4>
                </NavLink>

                <NavLink to={"/projects"} className="nav__links--projects">
                <h4>Projects</h4>
                </NavLink>


                <NavLink to={"/skills"} className="nav__links--skills">
                <h4>Skills</h4>
                </NavLink>


                <NavLink to={"/experiences"} className="nav__links--experiences">
                <h4>Experiences</h4>
                </NavLink>
            </div>
            <hr className="nav__divider"/>

        </div>
    )
}

export default Nav;
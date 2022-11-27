import "./Nav.scss";
import Icon from "../Icon/Icon";

const Nav = () => {
    
    return (
        <div className="nav">
            <Icon/>
            <div className="nav__links">
                <a className="nav__links--home" href="/">Home</a>
                <a className="nav__links--aboutme"href="/">About Me</a>
                <a className="nav__links--projects" href="/">Projects</a>
            </div>
            <hr className="nav__divider"/>

        </div>
    )
}

export default Nav;
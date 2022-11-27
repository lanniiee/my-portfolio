import "./Icon.scss";
import profilePic from "../../assets/images/profile.png";


const Icon = () => {

    return (
        <div className="icon">
            <img className="icon__image" src={profilePic} alt="profile"/>
        </div>
    );
};

export default Icon;
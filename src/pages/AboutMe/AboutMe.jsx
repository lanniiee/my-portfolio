import "./AboutMe.scss";
import { aboutme } from '../../data/aboutme';
import {education} from '../../data/education';
import { hobbies} from '../../data/hobbies';

const AboutMe = () => {

    const aboutmeContainer = 
        (<div className="aboutme__info">
            <h3>Career</h3>

            <p>
                {aboutme.line1}
            </p>
            <p>
                {aboutme.line2}
            </p>
        </div>)

    const myEducation = education.map(element => {

        
        return (
            <>
                <h6>{element.date}</h6>
                <p><span className="main-blue">+</span> {element.title}</p>
                <h5>{element.line}</h5>
            </>
        )
    })

    const myHobbies = hobbies.map(element => {
        return (
            <>
            <p><span className="main-blue">+</span> {element}</p>
            </>
        )
    })



    return (
        <div className="aboutme">

            <h1 className="aboutme__heading">About Me</h1>

            {aboutmeContainer}

            <div className="aboutme__info">
                <h3>Education</h3>
                {myEducation}
            </div>

            <div className="aboutme__info">
                <h3>Hobbies</h3>
                {myHobbies}
            </div>

        </div>
    );
};

export default AboutMe;

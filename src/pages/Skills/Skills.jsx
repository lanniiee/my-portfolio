import "./Skills.scss";
import {skillIcons} from "../../data/skills";

const Skills = () => {

    const skills = skillIcons.map(skill => (
        <div className="skills__language" key={skill.name}>
            <h1 className="skills__languages--heading">{skill.name}</h1>
            <img src={skill.image_url} alt={skill.name} className="skills__languages--image"/>
        </div>
    ))
    
    return (
        <div className="skills">
            <h1 className="skills__heading">Skills</h1>
            <div className="skills__languages">
                {skills}
            </div>

        </div>
    )
}

export default Skills;
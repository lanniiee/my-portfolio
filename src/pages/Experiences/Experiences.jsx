import "./Experiences.scss";
import {experiences} from "../../data/experiences";

const Experiences = () => {

    const myEducations = experiences.map(element => {
        return (
                    <div className="experiences__info">
                <h6>{element.date}</h6>
                <h3 className="experiences__job">{element.title}</h3>
                <p>
                    <span className="main-blue">+</span> {element.line1}
                </p>
                <p>
                <span className="main-blue">+</span> {element.line2}
                </p>
                <span className="main-blue">+</span> {element.line3}
                <p>
                <span className="main-blue">+</span> {element.line4}
                </p>
            </div>
        )
    })

    return (
        <div className="experiences">
            <h1 className="experiences__heading">Experiences</h1>
            {myEducations}
        </div>
    )
}

export default Experiences;
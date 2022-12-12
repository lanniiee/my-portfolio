import "./Experiences.scss";
import {experiences} from "../../data/experiences";

const Experiences = () => {


    const myEducations = experiences.map(element => {

        const parag = element.line.map(line => {
            return (
                <p>
                    <span className="main-blue">+</span> {line}
                </p>
            )
        })

        return (
            <div className="experiences__info">
                <h6>{element.date}</h6>
                <h3 className="experiences__job">{element.title}</h3>
                {parag}
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
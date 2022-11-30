import "./Projects.scss";
import Carousel from "../../components/Carousel/Carousel";
import { projectsArr } from "../../data/project.js";

const Projects = () => {

    const projectArr = projectsArr.map(project => project);

    return (
        <div className="projects">
            <h1 className="projects__heading">Projects</h1>
            <div className="projects__carousel-container">
                <Carousel imgArr={projectArr}/>
            </div>
        </div>
    )
}

export default Projects;
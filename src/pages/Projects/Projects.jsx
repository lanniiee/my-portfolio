import "./Projects.scss";
import Carousel from "../../components/Carousel/Carousel";

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projects__heading">Projects</h1>
            <div className="projects__carousel-container">
                <Carousel imgArr={""}/>
            </div>
        </div>
    )
}

export default Projects;
import "./Projects.scss";
import CardList from "../../components/CardList/CardList";

const Projects = ({projectArr}) => {


    return (
        <div className="projects">
            <h1 className="projects__heading">Projects</h1>
            <p className="projects__info">Below are some of the projects that I have worked on. Click on the image to visit the page</p>
            <CardList projectArr={projectArr} />
        </div>
    )
}

export default Projects;
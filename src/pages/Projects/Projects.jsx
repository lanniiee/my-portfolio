import "./Projects.scss";
import CardList from "../../components/CardList/CardList";

const Projects = ({projectArr}) => {


    return (
        <div className="projects">
            <h1 className="projects__heading">Projects</h1>
            <CardList projectArr={projectArr} />
        </div>
    )
}

export default Projects;
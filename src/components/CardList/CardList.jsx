import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({projectArr}) => {

    const eachCard = projectArr.map(project => {
        return (
            <Card project={project} key={project.id}/>
        )
    })
    return (
        <div className="cardList">
            {eachCard}
        </div>

    )

}

export default CardList;
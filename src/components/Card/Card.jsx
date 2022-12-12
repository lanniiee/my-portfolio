import "./Card.scss";

const Card = ({project}) => {
    
    const eachbuilt = project.built.map(built => {
        return (
            <p key={built} className="card__builds--built">{built}</p>
        )
    })
    return (
        <div className="card">
            <h1 className="card__name">{project.name.toUpperCase()}</h1>
            <div className="card__builds">
                {eachbuilt}
            </div>
            <img className="card__image" src={project.image_url} alt={""} />
        </div>
    )
}

export default Card;
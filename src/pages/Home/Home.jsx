import "./Home.scss";


const Home = () => {
    return (
        <div className="home">
            
            <div className="home__heading">
                <h1 className="home__heading--trainee">Junior</h1>
                <h1 className="home__heading--software">Full Stack</h1>
                <h1 className="home__heading--developer">Engineer</h1>
            </div>

            <div className="home__info">
                <h1 className="home__info--greeting">Hi there..</h1>
                <h1 className="home__info--name">My name is Lan Anh.</h1>
                <h2 className="home__info--welcome">Welcome to my portfolio.</h2>
            </div>

        </div>
    )
}

export default Home;
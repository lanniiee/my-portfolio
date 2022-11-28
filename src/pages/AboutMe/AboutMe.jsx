import "./AboutMe.scss";
import Carousel from "../../components/Carousel/Carousel";

const AboutMe = () => {
    return (
        <div className="aboutme">
            <h1 className="aboutme__heading">About Me</h1>
            <div className="aboutme__carousel-container">
                <Carousel imgArr={""}/>
            </div>

        </div>

    )

}

export default AboutMe;
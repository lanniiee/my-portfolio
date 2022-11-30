import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className="aboutme">

            <h1 className="aboutme__heading">About Me</h1>

            <div className="aboutme__info">
                <h3>Career</h3>

                <p>
                    I am currently a junior <span className="main-blue">Full-Stack </span> 
                    engineer at _Nology.
                </p>
                <p>
                    I previously worked as a Math teacher at an academy in Lambeth for 4
                    years before deciding to change career path. I decided to pursue a career as a full-stack engineer after trying out online courses of
                    Python with a friend and was pleasantly surprise at how much I enjoyed it.

                </p>
            </div>

            <div className="aboutme__info">
                <h3>Hobbies</h3>
                <p><span className="main-blue">+</span> Learning new programming languages</p>
                <p><span className="main-blue">+</span> Playing badminton, football and volleyball</p>
                <p><span className="main-blue">+</span> Creative activities such as drawing, painting</p>
                <p><span className="main-blue">+</span> Singing</p>
                <p><span className="main-blue">+</span> Gaming</p>
            </div>

        </div>
    );
};

export default AboutMe;

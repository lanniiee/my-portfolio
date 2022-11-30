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
                <h3>Education</h3>
                <h6>2018 – 2019 </h6>
                <p><span className="main-blue">+</span> Postgraduate Certificate in Education – Secondary (Non-QTS) | Goldsmiths</p>
                <h5></h5>
                <h6>2015 – 2018 </h6>
                <p><span className="main-blue">+</span> Economics Bsc (2.1) | University of Kent (Canterbury)</p>
                <h5><span className="bold">Modules including</span>: Econometrics, Finance, Games Theory, Industrial Economics, Economic Growth, Mathematics, 
Statistics, Micro and Macroeconomics, Strategy and Games, Data Analysis, Econometrics and, Money and Banking
</h5>
                <h6>2013 - 2015</h6>
                <p><span className="main-blue">+</span> A Levels | City and Islington College (Angel)</p>
                <h5>Mathematics  (B), Photography (B), Economics (C), AS History</h5>
                <h6>2008 - 2013</h6>
                <p><span className="main-blue">+</span> GCSE | Bacon’s College (London)</p>
                <h5>11 GCSEs including Mathematics (A), English Literature (A) and English Language (B)</h5>
            </div>

            <div className="aboutme__info">
                <h3>Hobbies</h3>
                <p><span className="main-blue">+</span> Learning new programming languages</p>
                <p><span className="main-blue">+</span> Playing badminton, football and volleyball</p>
                <p><span className="main-blue">+</span> Activities such as drawing, painting, singing and gaming</p>

            </div>

        </div>
    );
};

export default AboutMe;

import assets from "../Assets/Assets";

const About = () => {
  return (
    <section
      id="about"
      className="about section"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <img src={assets.react} />
            <h3>Front End</h3>
          </div>
          <div className="about-card">
            <img src={assets.nodejs} />
            <h3>Hybrid Applications</h3>
          </div>
          <div className="about-card">
            <img src={assets.git} />
            <h3>Version Control</h3>
          </div>
          <div className="about-card">
            <img src={assets.project_management} />
            <h3>Project Management</h3>
          </div>
        </div>
        <div className="about-info">
          <h3 className="sub-heading">About Me</h3>
          <h1 className="heading">Manuel Damián</h1>
          <p className="text">
            I am a software engineer whose primary strengths lie in dedication
            and hard work. Currently, I am interested in the field of web
            development, using technologies such as JavaScript, React, and SCSS,
            along with Git and Jira for project development. I have experience
            in various areas of the IT industry, as well as a strong ability to
            work collaboratively in a team.
          </p>
          <div className="cta">
            <a
              href="mailto:manueldamian@outlook.com"
              className="btn"
            >
              Contact Me
            </a>
            <a
              href={assets.resume}
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

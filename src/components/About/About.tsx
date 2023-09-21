const About = () => {
  return (
    <section
      id="about"
      className="about section"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-card">
            <img src="src\assets\react.svg" />
            <h3>Front End</h3>
          </div>
          <div className="about-card">
            <img src="src\assets\nodejs.svg" />
            <h3>Hybrid Applications</h3>
          </div>
          <div className="about-card">
            <img src="src\assets\git.svg" />
            <h3>Version Control</h3>
          </div>
          <div className="about-card">
            <img src="src\assets\project-management.svg" />
            <h3>Project Management</h3>
          </div>
        </div>
        <div className="about-info">
          <h3 className="sub-heading">About Me</h3>
          <h1 className="heading">Manuel Damián</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            iusto voluptates veniam facilis id quis reprehenderit! A minima ea
            consequuntur! Earum illo dolorem quae vitae fugiat quisquam fuga
            eius veniam.
          </p>
          <div className="cta">
            <a
              href="mailto:manueldamian@outlook.com"
              className="btn"
            >
              Contact Me
            </a>
            <a
              href="/assets/markusCV.pdf"
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

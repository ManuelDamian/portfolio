const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="skills section"
    >
      <div className="container">
        <div className="skills-box">
          <div className="box-heading">
            <h3 className="sub-heading">My Skills</h3>
            <h1 className="heading">Let me help you</h1>
            <div className="box-desc">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas quis ipsam deserunt fugiat aliquid! Facilis, quibusdam.
                Architecto est dolorem ex, tempore impedit iusto facere iure
                consequuntur tenetur ipsum illo ullam.
              </p>
              <a
                href="#"
                className="btn"
              >
                mail me
              </a>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="74"
                    cy="75"
                    r="68"
                  />
                </svg>
                <h2 className="js counter">
                  <span>JS</span>
                </h2>
              </div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="74"
                    cy="75"
                    r="68"
                  />
                </svg>
                <h2 className="css counter">
                  <span>CSS</span>
                </h2>
              </div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="74"
                    cy="75"
                    r="68"
                  />
                </svg>
                <h2 className="git counter">
                  <span>Git</span>
                </h2>
              </div>
            </div>
            <div className="skill">
              <div className="sk-progress">
                <svg>
                  <circle
                    cx="74"
                    cy="75"
                    r="68"
                  />
                </svg>
                <h2 className="jira counter">
                  <span>Jira</span>
                </h2>
              </div>
            </div>
          </div>
          <img
            src="src\assets\dots.png"
            className="dots"
          />
          <img
            src="src\assets\square1.png"
            className="shape square"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

import assets from "../Assets/Assets";

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
                "Throughout my professional journey, I have had the privilege of
                collaborating in diverse teams where I've learned the importance
                of effective teamwork. I have used a wide variety of tools over
                the years, from cutting-edge development technologies to
                powerful project management applications. My commitment is to
                bring not only my experience but also my passion, dedication,
                and skills to every project. I am convinced that by working
                together and leveraging our individual strengths, we can achieve
                exceptional results. Some of the tools I use include:
              </p>
              <a
                href="mailto:manueldamian@outlook.com"
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
            src={assets.dots}
            alt=""
            className="dots"
          />
          <img
            src={assets.square1}
            alt=""
            className="shape square"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

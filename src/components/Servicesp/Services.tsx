import React, { useEffect } from "react";

const Services: React.FC = () => {
  useEffect(() => {
    const ml_section = document.querySelector(".milestones");
    const ml_counters = document.querySelectorAll(".number span");

    function hasReached(el: HTMLElement | null) {
      if (!el) return false;
      const topPosition = el.getBoundingClientRect().top;
      return window.innerHeight >= topPosition + el.offsetHeight;
    }

    function updateCount(num: HTMLElement, maxNum: number) {
      const currentNum = +num.innerText;

      if (currentNum < maxNum) {
        num.innerText = (currentNum + 1).toString();
        setTimeout(() => {
          updateCount(num, maxNum);
        }, 800);
      }
    }

    function mlCounter() {
      if (!hasReached(ml_section as HTMLElement)) return;
      ml_counters.forEach((ctr) => {
        const target = +ctr.getAttribute("data-target");

        setTimeout(() => {
          updateCount(ctr as HTMLElement, target);
        }, 400);
      });
    }

    window.addEventListener("scroll", mlCounter);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", mlCounter);
    };
  }, []);
  return (
    <section
      id="services"
      className="services section"
    >
      <div className="container">
        <div className="services-info">
          <h3 className="sub-heading">My Services</h3>
          <h1 className="heading">Things I may do for my clients</h1>
          <p className="text">
            My approach to client service revolves around your needs and
            objectives. I customize solutions to fit your unique requirements.
            Open and transparent communication is a priority to ensure you're
            always informed. Quality is never compromised, and I'm committed to
            meeting deadlines. Continuous learning and staying up-to-date with
            industry trends allow me to provide the best possible support. Your
            goals are my goals, and I'm here to serve your interests to the
            fullest
          </p>
          <div className="milestones">
            <div className="ml">
              <h2 className="number">
                <span data-target="7">0</span>+
              </h2>
              <h5>Years</h5>
            </div>
            <div className="ml">
              <h2 className="number">
                <span data-target="10">0</span>+
              </h2>
              <h5>Proyects</h5>
            </div>
            <div className="ml">
              <h2 className="number">
                <span data-target="8">0</span>+
              </h2>
              <h5>Clients</h5>
            </div>
          </div>
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
        <div className="services-grid">
          <div className="srv-card">
            <div className="card-desc">
              <h3>Teamwork</h3>
              <p className="text">
                I've come to appreciate how a cohesive team, working in harmony,
                can overcome challenges and deliver exceptional results. Through
                various experiences, I've witnessed the power of collaboration,
                where individuals bring their unique strengths to the table,
                fostering innovation and driving projects toward success.
              </p>
            </div>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>Dedication</h3>
              <p className="text">
                Dedication is my driving force. When I commit to a project, I
                give it my all. I firmly believe that going the extra mile and
                being devoted to a task is what sets the foundation for success.
                I'm the type of person who won't stop until I've achieved the
                best possible outcome.
              </p>
            </div>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>Enthusiasm</h3>
              <p className="text">
                I bring a genuine enthusiasm to everything I do. I believe that
                a positive attitude and a genuine passion for my work can make a
                significant difference. This enthusiasm drives me to tackle
                challenges with a smile and to approach each project with energy
                and dedication
              </p>
            </div>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>Active Participation</h3>
              <p className="text">
                I actively engage in every project and task I take on. I firmly
                believe that being fully involved is key to achieving success.
                Whether it's collaborating with team members, contributing
                ideas, or taking the lead when needed, I consistently
                participate at a high level.
              </p>
            </div>
          </div>
          <img
            src="src\assets\square1.png"
            alt=""
            className="shape square"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

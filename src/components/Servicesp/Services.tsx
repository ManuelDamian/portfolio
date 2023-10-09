import React, { useEffect } from "react";
import servicesItemsArray from "./ServicesArray";
import assets from "../Assets/Assets";

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
              href={assets.resume}
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="services-grid">
          {servicesItemsArray.map((items) => (
            <div className="srv-card">
              <div className="card-desc">
                <h3>{items.title}</h3>
                <p className="text">{items.text}</p>
              </div>
            </div>
          ))}
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

export default Services;

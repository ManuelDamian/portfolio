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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            blanditiis laborum illo dignissimos libero odio ut tenetur veritatis
            minima, in cum excepturi iste aspernatur maxime ab tempore non. Eum,
            vero.
          </p>
          <div className="milestones">
            <div className="ml">
              <h2 className="number">
                <span data-target="10">0</span>+
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
              <h3>Brand Identity</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia sequi error esse, nesciunt ab accusamus nostrum ad
                porro cumque sapiente eaque omnis doloremque earum delectus.
                Aliquam error corrupti et fuga.
              </p>
            </div>
            <a
              href=""
              className="secondary-btn"
            >
              Explore more
            </a>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>Brand Identity</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia sequi error esse, nesciunt ab accusamus nostrum ad
                porro cumque sapiente eaque omnis doloremque earum delectus.
                Aliquam error corrupti et fuga.
              </p>
            </div>
            <a
              href=""
              className="secondary-btn"
            >
              Explore more
            </a>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>Product Desing</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia sequi error esse, nesciunt ab accusamus nostrum ad
                porro cumque sapiente eaque omnis doloremque earum delectus.
                Aliquam error corrupti et fuga.
              </p>
            </div>
            <a
              href=""
              className="secondary-btn"
            >
              Explore more
            </a>
          </div>

          <div className="srv-card">
            <div className="card-desc">
              <h3>App Desing</h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia sequi error esse, nesciunt ab accusamus nostrum ad
                porro cumque sapiente eaque omnis doloremque earum delectus.
                Aliquam error corrupti et fuga.
              </p>
            </div>
            <a
              href=""
              className="secondary-btn"
            >
              Explore more
            </a>
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

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Showcase: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({ duration: 2500, distance: "60px" });

    sr.reveal(".showcase-info", { delay: 400 });
    sr.reveal(".showcase-image", { origin: "top", delay: 400 });
  }, []);

  return (
    <section
      id="home"
      className="showcase-area"
    >
      <div className="container">
        <div className="showcase-info">
          <h3 className="sub-heading">Developer</h3>
          <h1 className="heading">Manuel Damián</h1>
          <p className="text">Hello guys👋!. Let's Work together!.</p>
          <div className="cta">
            <a
              href="mailto:manueldamian@outlook.com"
              className="btn"
            >
              Contact Me
            </a>
            <a
              href="./src/assets/CV_Manuel Damian_EN.pdf"
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="showcase-image">
          <img
            src="./src/assets/person3.png"
            className="person"
            alt="Manuel Damian"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;

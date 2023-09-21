import React, { useEffect, useRef } from "react";
// import Swiper, { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

const Testimonials: React.FC = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      // Configura las opciones de Swiper aquí
      loop: true,
      pagination: {
        dynamicBullets: true,
        el: ".swiper-pagination",
        clickable: true,
      },
      speed: 300, // Velocidad de transición en milisegundos
      autoplay: {
        delay: 3000, // Retraso entre diapositivas en milisegundos
        disableOnInteraction: false, // Mantener la reproducción automática después de la interacción del usuario
      },
    });
  }, []);

  return (
    <section
      id="referals"
      className="testimonials section"
    >
      <div className="container">
        <div className="section-backgroud">
          <img
            src="src\assets\person2.png"
            className="person"
          />
          <img
            src="src\assets\circle2.png"
            className="circle"
          />
          <img
            src="src\assets\square1.png"
            className="square"
          />
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client">
                <img src="src\assets\testi1.png" />
                <div className="client-info">
                  <h4>alex alex</h4>
                  <h5>
                    Excecutive Officer <a href="">@ABEnergy</a>
                  </h5>
                </div>
              </div>
              <q className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, cumque quam sunt omnis optio quas illo possimus natus
                commodi, officia voluptatem temporibus magnam vitae consequatur
                impedit rem facilis iure nisi?{" "}
              </q>
            </div>
            <div className="swiper-slide">
              <div className="client">
                <img src="src\assets\testi2.png" />
                <div className="client-info">
                  <h4>alex alex</h4>
                  <h5>
                    Excecutive Officer <a href="">@ABEnergy</a>
                  </h5>
                </div>
              </div>
              <q className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, cumque quam sunt omnis optio quas illo possimus natus
                commodi, officia voluptatem temporibus magnam vitae consequatur
                impedit rem facilis iure nisi?{" "}
              </q>
            </div>
            <div className="swiper-slide">
              <div className="client">
                <img src="src\assets\testi3.png" />
                <div className="client-info">
                  <h4>alex alex</h4>
                  <h5>
                    Excecutive Officer <a href="">@ABEnergy</a>
                  </h5>
                </div>
              </div>
              <q className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt, cumque quam sunt omnis optio quas illo possimus natus
                commodi, officia voluptatem temporibus magnam vitae consequatur
                impedit rem facilis iure nisi?{" "}
              </q>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="testimonials-tittle">
          <h3 className="sub-heading">Testimonials</h3>
          <h1 className="heading">My work with:</h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

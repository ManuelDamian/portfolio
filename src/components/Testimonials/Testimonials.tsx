import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials: React.FC = () => {
  return (
    <section
      id="referals"
      className="testimonials section"
    >
      <div className="container">
        <div className="section-backgroud">
          <img
            src="src\assets\mio2.png"
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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="swiper"
        >
          <SwiperSlide className="swiper-slide">
            <div className="client">
              <img
                className="testimonial-img"
                src="src\assets\pam.jpg"
              />
              <div className="client-info">
                <h4>LETICIA PAMELA REYES RAMON</h4>
                <h5>
                  DEVELOPER SENIOR IOS{" "}
                  <a href="https://www.linkedin.com/in/pamela-r-r-144898206">
                    @Pamela R.R
                  </a>
                </h5>
              </div>
            </div>
            <q className="text">
              We worked together for about a year on a mobile project for a
              banking company, during which Damian excelled in excellent
              teamwork, problem-solving, and great attention to detail. He truly
              has no fear of learning.{" "}
            </q>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="client">
              <img
                className="testimonial-img"
                src="src\assets\testi1.png"
              />
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
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="client">
              <img
                className="testimonial-img"
                src="src\assets\edgar.jpeg"
              />
              <div className="client-info">
                <h4>Edgar Guadalupe Campos González</h4>
                <h5>
                  .NET Developer
                  <a href="https://www.linkedin.com/in/edgcampos/">
                    @edgcampos
                  </a>
                </h5>
              </div>
            </div>
            <q className="text">
              Manuel is a person committed to his professional growth. He always
              strives to give his best to achieve the best results. We have
              collaborated on several projects where he consistently displayed a
              positive attitude, exceptional performance, and unparalleled
              teamwork.{" "}
            </q>
          </SwiperSlide>
        </Swiper>

        <div className="testimonials-tittle">
          <h3 className="sub-heading">Testimonials</h3>
          <h1 className="heading">My work with:</h1>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

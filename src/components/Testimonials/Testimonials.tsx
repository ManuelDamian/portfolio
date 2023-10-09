import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import testimonialsArray from "./Array";
import imgArray from "./imgArray";

const Testimonials: React.FC = () => {
  return (
    <section
      id="referals"
      className="testimonials section"
    >
      <div className="container">
        <div className="section-backgroud">
          {imgArray.map((images) => (
            <img
              src={images.imagen}
              className={images.name}
            />
          ))}
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
          {testimonialsArray.map((testimonio, index) => (
            <SwiperSlide
              className="swiper-slide"
              key={index}
            >
              <div className="client">
                <img
                  className="testimonial-img"
                  src={testimonio.imagen}
                />
                <div className="client-info">
                  <h4>{testimonio.nombre}</h4>
                  <h5>
                    {testimonio.puesto}{" "}
                    <a href={"testimonio.url"}>@{testimonio.perfil}</a>
                  </h5>
                </div>
              </div>
              <q className="text">{testimonio.texto}</q>
            </SwiperSlide>
          ))}
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

import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="contact section"
    >
      <div className="container">
        <img
          src="src\assets\triangle.png"
          alt=""
          className="shape triangle"
        />
        <img
          src="src\assets\square2.png"
          alt=""
          className="shape square"
        />
        <div className="contact-info">
          <h3 className="sub-heading">Contact me</h3>
          <h1 className="heading">Les's Work together!</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            aperiam, nisi nihil veritatis voluptatibus debitis quibusdam
            excepturi perspiciatis ut reprehenderit? Error iste doloribus
            necessitatibus reiciendis ad minima vero ipsa nesciunt?
          </p>
          <a
            href="mailto:manueldamian@outlook.com"
            className="mail"
          >
            manueldamian@outlook.com <i className="uil uil-arrow-to-right"></i>
          </a>
        </div>
        <form
          action="index.html"
          className="contact-form"
        >
          <h3>Se me a message</h3>
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Your Email"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-input"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="btn"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;

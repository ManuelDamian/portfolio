import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="contact section"
    >
      <div className="container">
        <img
          src="public/assets/triangle.png"
          alt=""
          className="shape triangle"
        />
        <img
          src="public/assets/square2.png"
          alt=""
          className="shape square"
        />
        <div className="contact-info">
          <h3 className="sub-heading">Contact me</h3>
          <h1 className="heading">Les's Work together!</h1>
          <p className="text">
            I hope my profile aligns with your interests and allows us to work
            together. If I've made a positive impression, please feel free to
            send me a message.
          </p>
          <a
            href="mailto:manueldamian@outlook.com"
            className="mail"
          >
            manueldamian@outlook.com <i className="uil uil-arrow-to-right"></i>
          </a>
        </div>
        <form
          className="contact-form"
          action="https://formsubmit.co/manueldamian@outlook.com"
          method="POST"
        >
          <h3>Se me a message</h3>
          <input
            type="text"
            className="form-input"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Your Email"
            name="email"
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Your Subject"
            name="subject"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-input"
            name="message"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="btn"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          ></input>
          <input
            type="hidden"
            name="_next"
            value="https://manueldamian.github.io/portfolio/index.html"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;

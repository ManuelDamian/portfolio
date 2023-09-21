import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <a
          href=""
          className="logo"
        >
          Portf<span>olio.</span>
        </a>
        <p className="text">&copy; Copyright2023. All rights reserved</p>
        <ul className="social-media">
          <li>
            <a
              href="https://github.com/ManuelDamian"
              className="social-link"
            >
              <i className="uil uil-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/manuel-damian/"
              className="social-link"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

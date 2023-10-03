import React, { useEffect, useState } from "react";

// Usa una función de flecha para definir el componente
const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  const stickyNavbar = () => {
    console.log(window.scrollY);
    setSticky(window.scrollY > 5);
  };

  const changeTheme = () => {
    const body = document.body;
    const toggleBtn = document.querySelector(".toggle-btn");
    if (!body.classList.contains("dark")) {
      body.classList.add("dark");
      toggleBtn?.classList.replace("uil-moonset", "uil-sun");
    } else {
      body.classList.remove("dark");
      toggleBtn?.classList.replace("uil-sun", "uil-moonset");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);

  return (
    <header
      // ref={headerRef}
      className={`${sticky ? "scrolled" : ""}`}
    >
      <nav className="container">
        <a
          className="logo"
          href="#home"
        >
          Manuel<span>Damian</span>
        </a>
        <div className="links">
          <ul>
            <li>
              <a
                href="#"
                className="nav-link"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-link"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#referals"
                className="nav-link"
              >
                Referals
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-moonset toggle-btn"
            onClick={changeTheme}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

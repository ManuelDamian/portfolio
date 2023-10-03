import React, { useEffect, useState } from "react";

import headerItemsArray from "./HeaderArray";

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
    <header className={`${sticky ? "scrolled" : ""}`}>
      <nav className="container">
        <a
          className="logo"
          href="#home"
        >
          Manuel<span>Damian</span>
        </a>
        <div className="links">
          <ul>
            {headerItemsArray.map((items) => (
              <li>
                <a
                  href={items.link}
                  className="nav-link"
                >
                  {items.name}
                </a>
              </li>
            ))}
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

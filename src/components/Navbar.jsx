import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbarDiv = document.querySelector(".navbar");
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbarDiv.classList.add("navbar-cng");
      } else {
        navbarDiv.classList.remove("navbar-cng");
      }
    };

    const handleNavbarButtons = () => {
      const navbarCollapseDiv = document.getElementById("navbar-collapse");
      const navbarShowBtn = document.getElementById("navbar-show-btn");
      const navbarCloseBtn = document.getElementById("navbar-close-btn");

      // show navbar
      navbarShowBtn.addEventListener("click", () => {
        navbarCollapseDiv.classList.add("navbar-collapse-rmw");
      });

      // hide side bar
      navbarCloseBtn.addEventListener("click", () => {
        navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
      });

      document.addEventListener("click", (e) => {
        if (
          e.target.id !== "navbar-collapse" &&
          e.target.id !== "navbar-show-btn" &&
          e.target.parentElement?.id !== "navbar-show-btn"
        ) {
          navbarCollapseDiv.classList.remove("navbar-collapse-rmw");
        }
      });
    };

    const handleResize = () => {
      let resizeTimer;

      window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
      });
    };

    // Attach event listeners
    window.addEventListener("scroll", handleScroll);
    handleNavbarButtons();
    handleResize();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="container flex">
        <Link to="/" className="site-brand">
          Meram<span>Bel</span>
        </Link>

        <button type="button" id="navbar-show-btn" className="flex">
          <i className="fas fa-bars"></i>
        </button>

        <div id="navbar-collapse">
          <button type="button" id="navbar-close-btn" className="flex">
            <i className="fas fa-times"></i>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                Galeri
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

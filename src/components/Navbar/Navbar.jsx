import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/kasa";
  const isAbout = location.pathname === "/kasa/about";

  return (
    <>
      <nav className="navbar">
        <img
          className="navbar-logo"
          src="/kasa/src/assets/logo.png"
          alt="logo-navbar"
        />
        <ul className="navbar-links">
          <li>
            <Link
              to="/kasa"
              className={`navbar-link ${isHome ? "navbar-link--active" : ""}`}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/kasa/about"
              className={`navbar-link ${isAbout ? "navbar-link--active" : ""}`}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

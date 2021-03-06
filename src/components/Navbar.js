import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useToggle } from "react-use";
import logo from "../assets/logo.png";
import { Image } from "react-bootstrap";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useToggle(false);
  const changenavbar = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changenavbar);
  return (
    <header className={navbar ? "header-area sticky" : "header-area"}>
      <a className="logo mb-2 text-decoration-none">
        <Link to="/" className="text-decoration-none main-logo">
          <Image src={logo} width="50px" height="50px" /> EISI
        </Link>
      </a>
      <ul className={active ? "active" : null}>
        <li>
          <a>
            <Link to="/" className="text-decoration-none" onClick={setActive}>
              Home
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link
              to="/About"
              className="text-decoration-none"
              onClick={setActive}
            >
              About
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link
              to="/Features"
              className="text-decoration-none"
              onClick={setActive}
            >
              Features
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link
              to="/Services"
              className="text-decoration-none"
              onClick={setActive}
            >
              AMC & Services
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link
              to="/Demo"
              className="text-decoration-none"
              onClick={setActive}
            >
              Demo
            </Link>
          </a>
        </li>
      </ul>
      <input type="checkbox" id="check" />
      <label for="check">
        <FaBars className="bars" onClick={setActive} />
      </label>
      {/* <div className="bg-primary grid-3 p-2">
      <div>
        <Image src={logo} width="100px" height="50px" className="position-relative" />
      </div>
      <div>
          <h2 className="text-center text-white container position-relative">
              EISI
          </h2>
      </div>
      <div>
        <nav className="nav container position-relative">
          <Link to="/" className="text-white ml-4 p-1 link text-decoration-none">
            Home
          </Link>
          <Link to="/About" className="text-white ml-4 p-1 link text-decoration-none">
            About
          </Link>
          <Link to="/Features" className="text-white ml-4 p-1 link text-decoration-none">
            Features
          </Link>
          <Link to="/Services" className="text-white ml-4 p-1 link text-decoration-none">
            Services
          </Link>
          <Link to="/SignUp" className="text-white ml-4 p-1 text-decoration-none btn">
            Sign Up
          </Link>
        </nav>
      </div>
    </div> */}
    </header>
  );
}

export default Navbar;

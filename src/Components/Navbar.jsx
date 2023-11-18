import { Link } from "react-router-dom";
import Bloggy from "../images/bloggy.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import '../Styles/NavbarStyles/Navbar.scss'
import '../'

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/story">
                Our Story
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/write">
                Write
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/membership">
                Membership
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Bloggy} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/story">
                Our Story
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/write">
                Write
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/membership">
                Membership
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__register" to="/signin">
              Sign In
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
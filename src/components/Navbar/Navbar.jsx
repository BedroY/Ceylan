import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.gericht} alt="app__logo" /> */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Hem</a>
        </li>
        {/* <li className="p__opensans">
          <a href="#about">Om oss</a>
        </li> */}
        <li className="p__opensans">
          <a href="#menu">Meny</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Hem
                </a>
              </li>
              {/* <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Om oss
                </a>
              </li> */}
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Meny
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

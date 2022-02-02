import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Skoghalls bästa pizzeria" />
      <h1 className="app__header-h1">Pizzeria Ceylan</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Beställ idag hos oss på: <br />
        054-51 70 78
      </p>
      <button type="button" className="custom__button">
        <a href="#menu">Utforska menyn</a>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome1} alt="header img" />
    </div>
  </div>
);

export default Header;

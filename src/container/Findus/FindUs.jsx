import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Hitta oss
      </h1>
      <p
        className="p__cormorant"
        style={{ color: "#DCCA87", margin: "2rem 0" }}
      >
        Address
      </p>
      <div className="app__wrapper-content">
        <p className="p__opensans">Björkhagsgatan 2, 663 30 Skoghall</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Öppettider
        </p>
        <p className="p__opensans">Mån - Fre: 11:00 - 22:00</p>
        <p className="p__opensans">Lör - Sön: 12:00 - 22:00</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Beställ
        </p>
        <p className="p__opensans">Telefonnummer: 054-51 70 78</p>
      </div>
      {/* <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Besök oss
      </button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;

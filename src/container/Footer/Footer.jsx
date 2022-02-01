import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Kontakta oss</h1>
        <p className="p__opensans">Björkhagsgatan 2, 663 30 Skoghall</p>
        <p className="p__opensans">054-51 70 78</p>
      </div>

      {/* <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div> */}

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Öppettider</h1>
        <p className="p__opensans">Måndag-Fredag</p>
        <p className="p__opensans">11:00 - 22:00</p>
        <p className="p__opensans">Lördag-Söndag</p>
        <p className="p__opensans">12:00 - 22:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Ceylan. Alla rättigheter reserverade.</p>
    </div>
  </div>
);

export default Footer;

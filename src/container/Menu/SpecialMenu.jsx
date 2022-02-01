import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Vår signatursmeny" />
      <h1 className="headtext__cormorant">Våran Meny</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 1</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza1.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 2</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza2.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 3</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza3.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 4</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza4.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 5</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza5.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza Klass 6</p>
        <div className="app__specialMenu_menu_items">
          {data.Pizza6.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Specialpizzor</p>
        <div className="app__specialMenu_menu_items">
          {data.specialPizza.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Kebabpizzor</p>
        <div className="app__specialMenu_menu_items">
          {data.kebabPizza.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Mexikanska Pizzor</p>
        <div className="app__specialMenu_menu_items">
          {data.mexicanPizza.map((Pizza, index) => (
            <MenuItem
              key={Pizza.title + index}
              title={Pizza.title}
              price={Pizza.price}
              tags={Pizza.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Sallader</p>
        <div className="app__specialMenu_menu_items">
          {data.salads.map((Salad, index) => (
            <MenuItem
              key={Salad.title + index}
              title={Salad.title}
              price={Salad.price}
              tags={Salad.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Kebabrätter</p>
        <div className="app__specialMenu_menu_items">
          {data.kebabs.map((kebab, index) => (
            <MenuItem
              key={kebab.title + index}
              title={kebab.title}
              price={kebab.price}
              tags={kebab.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Rullar</p>
        <div className="app__specialMenu_menu_items">
          {data.rolls.map((roll, index) => (
            <MenuItem
              key={roll.title + index}
              title={roll.title}
              price={roll.price}
              tags={roll.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pita</p>
        <div className="app__specialMenu_menu_items">
          {data.pitas.map((pita, index) => (
            <MenuItem
              key={pita.title + index}
              title={pita.title}
              price={pita.price}
              tags={pita.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <br />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Falafel</p>
        <div className="app__specialMenu_menu_items">
          {data.falafel.map((falafel, index) => (
            <MenuItem
              key={falafel.title + index}
              title={falafel.title}
              price={falafel.price}
              tags={falafel.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div> */}
  </div>
);

export default SpecialMenu;

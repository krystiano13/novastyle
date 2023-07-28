import React from "react";
import { NavLink } from "react-router-dom";

import bag from "../assets/bag.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  const [dropDown, setDropDown] = React.useState<boolean>(false);
  const handleHamburgerClick = () => {
    setDropDown((prev: boolean) => !prev);
  };

  return (
    <>
      <div
        className={
          dropDown
            ? "dropDownSection d-lg-none d-flex flex-column showDropDown"
            : "dropDownSection d-lg-none d-flex flex-column"
        }
      >
        <NavLink className="a" to="/">
          ALL PRODUCTS
        </NavLink>
        <NavLink className="a" to="/">
          ABOUT US
        </NavLink>
        <NavLink className="a" to="/">
          CONTACT US
        </NavLink>
        <NavLink className="a" to="/">
          QUESTIONS
        </NavLink>
        <NavLink className="a" to="/">
          COLLECTIONS
        </NavLink>
        <NavLink className="a" to="/">
          SEARCH
        </NavLink>
      </div>
      <nav className="d-flex align-items-center justify-content-between">
        <button
          onClick={handleHamburgerClick}
          className={
            dropDown
              ? "crossed hamburgerMenu d-lg-none"
              : "hamburgerMenu d-lg-none"
          }
        >
          <div className="wrap d-flex flex-column align-items-center justify-content-center">
            <div id="firstStripe" className="stripe"></div>
            <div className="stripe"></div>
            <div id="lastStripe" className="stripe"></div>
          </div>
        </button>
        <div className="logo d-flex align-items-center justify-content-center">
          NS
        </div>
        <div className="navigation d-lg-flex d-none align-items-center justify-content-center">
          <NavLink className="a" to="/">
            ALL PRODUCTS
          </NavLink>
          <NavLink className="a" to="/">
            ABOUT US
          </NavLink>
          <NavLink className="a" to="/">
            CONTACT US
          </NavLink>
          <NavLink className="a" to="/">
            QUESTIONS
          </NavLink>
          <NavLink className="a" to="/">
            COLLECTIONS
          </NavLink>
          <button className="searchButton">
            <img src={search} alt="search" />
          </button>
          <button className="cartButton">
            <img src={bag} alt="bag" />
          </button>
        </div>
        <div className="navigation d-flex d-lg-none align-items-center justify-content-end">
          <button className="cartButton">
            <img src={bag} alt="bag" />
          </button>
        </div>
      </nav>
    </>
  );
};

export { Navbar };

import React from "react";
import { Dropdown } from "./Dropdown";
import { HamburgerButton } from "./HamburgerButton";
import { Navigation } from "./Navigation";

import bag from "../../assets/bag.svg";

const Navbar = () => {
  const [dropDown, setDropDown] = React.useState<boolean>(false);
  const handleHamburgerClick = () => {
    setDropDown((prev: boolean) => !prev);
  };

  return (
    <>
      <Dropdown dropDown={dropDown} />
      <nav className="d-flex align-items-center justify-content-between">
        <HamburgerButton
          dropDown={dropDown}
          handleHamburgerClick={handleHamburgerClick}
        />
        <div className="logo d-flex align-items-center justify-content-center">
          NS
        </div>
        <Navigation />
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

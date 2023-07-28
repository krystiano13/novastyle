import React from "react";

interface HBInterface {
    dropDown: boolean,
    handleHamburgerClick: () => void
}

const HamburgerButton: React.FC<HBInterface> = ({ dropDown, handleHamburgerClick }) => {
    return (
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
    );
}

export { HamburgerButton };
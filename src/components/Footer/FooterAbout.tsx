import React from "react";

import { FooterButton } from "./FooterButton";
import globe from '../../assets/footer/globe.svg';

const FooterAbout = () => {
  return (
    <div className="col-6">
      <h2>About Us</h2>
      <p>
        Inspired by modern nature, furious "60s and elegant beauty, brand
        founders offer designs that reflect the aesthetics, but also are going
        to become statement elements in the wardrobe of a modern boys and girls.
      </p>
      <div className="icons">
        <FooterButton src={globe} title="Pinterest" />
        <FooterButton src={globe} title="Instagram" />
      </div>
    </div>
  );
};

export { FooterAbout };

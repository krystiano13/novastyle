import React from "react";

import { FooterButton } from "./FooterButton";
import { footerNav } from "./FooterData";

const FooterNavigation = () => {
  return (
    <div className="col-6">
      <h2>Navigation</h2>
      <div className="buttons">
        {footerNav.map((item) => (
          <FooterButton key={item.id} src={item.src} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export { FooterNavigation };

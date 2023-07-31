import React from "react";

import { footerCollection } from "./FooterData";
import { FooterButton } from "./FooterButton";

const FooterCollections = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <h2>Collections</h2>
      <div className="buttons">
        {footerCollection.map((item) => (
          <FooterButton key={item.id} title={item.text} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export { FooterCollections };

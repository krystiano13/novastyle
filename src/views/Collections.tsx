import React from "react";

import { CollectData } from "../components/Collect/CollectData";

const Collections = () => {
  return (
    <main className="Collect">
      <h1>Our Collections</h1>
      <h2>Opulent Grace</h2>
      <div className="row">
        {CollectData.map((item) => (
          <div key={item.id} className="col-md-12 col-lg-4 collection">
            <h3>{item.title}</h3>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </main>
  );
};

export { Collections };

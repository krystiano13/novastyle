import React from "react";
import { bestsellersData } from "./bestsellersData";

const Bestsellers = () => {
  return (
    <section className="Bestsellers container-fluid">
      <div className="row">
        {bestsellersData.map((item) =>
          item.isImg ? (
            <div className={item.fr ? "col-4" : "col-3"}>
              <img src={item.img1} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ) : (
            <div className="col-4">
              <p className="lead">OUR</p>
              <h2>Bestsellers</h2>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export { Bestsellers };

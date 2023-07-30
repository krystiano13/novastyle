import React from "react";
import { bestsellersData } from "./bestsellersData";

const Bestsellers = () => {
  return (
    <section className="Bestsellers container-fluid">
      <div className="row">
        {bestsellersData.map((item) =>
          item.isImg ? (
            <div className={item.fr ? "col-lg-4 col-md-12" : "col-lg-3 col-md-12"}>
              <img className="first" src={item.img1} alt={item.text} />
              <img className="second" src={item.img2} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ) : (
            <div id="text-version" className="col-lg-4 col-md-12">
              <h3 className="lead">OUR</h3>
              <h2>Bestsellers</h2>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export { Bestsellers };

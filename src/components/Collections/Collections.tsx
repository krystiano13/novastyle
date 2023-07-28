import React from "react";

const Collections = () => {
  return (
    <div className="collections">
      <div className="container-fluid">
        <div className="row">
          <button className="col-md-12 d-flex flex-dolumn align-items-end">
            <div id="c1" className="bg">
              <div className="content">
                <button>
                  <p>Collection</p>
                  <h2>Modern Elegance</h2>
                </button>
                <div className="dots">
                  <button className="dot choosen"></button>
                  <button className="dot"></button>
                  <button className="dot"></button>
                </div>
              </div>
            </div>
          </button>
          <button
            id="c2"
            className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end"
          >
            <span>Women</span>
          </button>
          <button
            id="c3"
            className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end"
          >
            <span>Men</span>
          </button>
          <button
            id="c4"
            className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end"
          >
            <span>Accessories</span>
          </button>
          <button
            id="c5"
            className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end"
          >
            <span>Sale</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Collections };

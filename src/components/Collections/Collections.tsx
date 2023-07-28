import React from "react";

const Collections = () => {
    return (
      <div className="collections">
        <div className="container-fluid">
          <div className="row">
            <button id="c1" className="col-md-12 d-flex flex-dolumn align-items-end">Modern Elegance</button>
            <button id="c2" className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end">Women</button>
            <button id="c3" className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end">Men</button>
            <button id="c4" className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end">Accessories</button>
            <button id="c5" className="col-md-12 col-lg-6 d-flex flex-dolumn align-items-end">Sale</button>
          </div>
        </div>
      </div>
    );
}

export { Collections };
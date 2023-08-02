import React from "react";

import ab3 from "../assets/about/ab3.jpg";
import cn1 from "../assets/contact/cn1.jpg";
import cn2 from "../assets/contact/cn2.jpg";

const Contact = () => {
  return (
    <main className="Contact container-fluid">
      <h1>Contact Us</h1>
      <h2>Contact Info</h2>
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <img src={cn1} alt="model" />
        </div>
        <form className="col-md-12 col-lg-4">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message ..." />
          <button type="submit">Send</button>
        </form>
        <div className="col-md-12 col-lg-4">
          <img src={cn2} alt="model" />
        </div>
        <div className="col-md-12 col-lg-4">
          <img src="" alt="" />
          <p></p>
          <p></p>
          <img src="" alt="" />
          <h3></h3>
        </div>
        <div className="col-md-12 col-lg-4">
          <img src={ab3} alt="model" />
        </div>
        <div className="col-md-12 col-lg-4">
          <img src="" alt="" />
          <p></p>
          <p></p>
          <img src="" alt="" />
          <h3></h3>
        </div>
      </div>
    </main>
  );
};

export { Contact };

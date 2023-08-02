import React from "react";

import ab3 from "../assets/about/ab3.jpg";
import cn1 from "../assets/contact/cn1.jpg";
import cn2 from "../assets/contact/cn2.jpg";
import home from "../assets/contact/home.svg";
import phone from "../assets/contact/phone.svg";

const Contact = () => {
  return (
    <main className="Contact container-fluid">
      <h1>Contact Us</h1>
      <h2>Contact Info</h2>
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <img className="img" src={cn1} alt="model" />
        </div>
        <form className="col-md-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message ..." />
          <button type="submit">Send</button>
        </form>
        <div className="col-md-12 col-lg-4">
          <img className="img" src={cn2} alt="model" />
        </div>
        <div className="col-md-12 col-lg-4">
          <img className="icon" src={home} alt="icon" />
          <p>Los Angeles, 3566</p>
          <p>House Road, 9001</p>
          <img className="icon" src={phone} alt="icon" />
          <h3>561 - 713 - 9718</h3>
        </div>
        <div className="col-md-12 col-lg-4">
          <img className="img" src={ab3} alt="model" />
        </div>
        <div className="col-md-12 col-lg-4">
          <img className="icon" src={home} alt="icon" />
          <p>New York,</p>
          <p>Middleville Road, 9017</p>
          <img className="icon" src={phone} alt="icon" />
          <h3>561 - 713 - 9718</h3>
        </div>
      </div>
    </main>
  );
};

export { Contact };

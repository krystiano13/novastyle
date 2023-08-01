import React from "react";

import ab1 from "../assets/about/ab1.mp4";
import ab2 from "../assets/about/ab2.jpg";
import ab3 from "../assets/about/ab3.jpg";

const About = () => {
  return (
    <main className="About container-fluid">
      <h1>About Us</h1>
      <h2>A Breath of Fresh Elegance</h2>
      <div className="row">
        <div className="col-6">
          <video autoPlay muted loop src={ab1}></video>
        </div>
        <div className="col-6">
          <p>
            Indulge in the captivating allure of our latest collection, where
            pastel tones take center stage. From dreamy blush pinks to soothing
            mint greens, our color palette evokes a sense of tranquility and
            sophistication that is perfect for the season.
          </p>
        </div>
        <div className="col-6">
          <p>
            Our designers have meticulously crafted each piece to embody a sense
            of understated luxury. The minimalist silhouettes ensure a clean and
            effortless look, allowing you to make a stylish statement with ease.
          </p>
        </div>
        <div className="col-6">
          <img alt="model" src={ab2} />
        </div>
        <div className="col-6">
          <img alt="models" src={ab3} />
        </div>
        <div className="col-6">
          <p>
            Shop now and embark on a journey of effortless sophistication with
            our New Collection. Discover the perfect blend of minimalist fashion
            and refreshing textures.
          </p>
        </div>
      </div>
    </main>
  );
};

export { About };

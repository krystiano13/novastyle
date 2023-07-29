import React from "react";
import { sliderData } from "./sliderData";
import c1 from "../../assets/collections/c1.jpg";
import { gsap } from "gsap";

const Collections = () => {
  const [data, setData] = React.useState(sliderData);
  const [id, setId] = React.useState<number>(0);
  const idRef = React.useRef<number>(0);

  const triggerAnimation = () => {
    gsap.to(".hero", { autoAlpha: 0, duration: 0.2 });
    gsap.to(".hero", { autoAlpha: 1, duration: 0.5, delay: 0.2 });
  };

  React.useEffect(() => {
    idRef.current = id;
  }, [id]);

  React.useEffect(() => {
    setInterval(() => {
      triggerAnimation();
      setTimeout(() => {
        if (idRef.current < 2) setId((prev) => prev + 1);
        else setId(0);
      }, 200);
    }, 8000);
  }, []);

  return (
    <div className="collections">
      <div className="container-fluid">
        <div className="row">
          <div
            id={idRef.current.toString()}
            className="hero col-md-12 d-flex flex-dolumn align-items-end"
          >
            {data[id].video ? (
              <video loop autoPlay muted src={data[id].imgSrc}></video>
            ) : (
              <img src={data[id].imgSrc} className="bg" />
            )}

            <div className="content">
              <button>
                <p>{data[id].text}</p>
                <h2>{data[id].text2}</h2>
              </button>
              <div className="dots">
                <button
                  onClick={() => {
                    triggerAnimation();
                    setTimeout(() => {
                      setId(0);
                    }, 200);
                  }}
                  className={id === 0 ? "dot choosen" : "dot"}
                ></button>
                <button
                  onClick={() => {
                    triggerAnimation();
                    setTimeout(() => {
                      setId(1);
                    }, 200);
                  }}
                  className={id === 1 ? "dot choosen" : "dot"}
                ></button>
                <button
                  onClick={() => {
                    triggerAnimation();
                    setTimeout(() => {
                      setId(2);
                    }, 200);
                  }}
                  className={id === 2 ? "dot choosen" : "dot"}
                ></button>
              </div>
            </div>
          </div>
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

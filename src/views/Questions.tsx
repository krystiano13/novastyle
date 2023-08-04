import React from "react";

import { QuestionsData } from "../components/Questions/QuestionsData";

const Questions = () => {
  return (
    <main className="Questions container-fluid">
      <div className="row">
        {QuestionsData.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-12">
            {item.isImage && <img src={item.imgSrc} alt="model" />}
            {item.isVid && (
              <video loop muted autoPlay src={item.imgSrc}></video>
            )}
            {item.isImage === false && item.isVid === false ? (
              <React.Fragment>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </React.Fragment>
            ) : null}
          </div>
        ))}
      </div>
    </main>
  );
};

export { Questions };

import React from "react";

interface ModalInterace {
  shown: boolean;
}

const Modal: React.FC<ModalInterace> = ({ shown }) => {
  return (
    <div
      className={
        !shown
          ? "cart_modal hidden d-flex justify-content-center align-items-center"
          : "cart_modal shown d-flex justify-content-center align-items-center"
      }
    >
      <div className="modal_content">
        <div className="modal_bar">
          <p>Your Cart</p>
          <button className="modal_btn">
            <div id="ms1" className="modal_stripe"></div>
            <div id="ms2" className="modal_stripe"></div>
          </button>
        </div>
        <div className="modal_text">
          <p className="lead">No items found.</p>
        </div>
      </div>
    </div>
  );
};

export { Modal };

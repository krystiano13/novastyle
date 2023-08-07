import React from "react";

interface ModalInterace {
    shown: boolean
}

const Modal: React.FC<ModalInterace> = ({ shown }) => {
  return (
    <div className={!shown ? "cart_modal hidden" : "cart_modal shown"}>
      <div className="modal_content">
        <div className="modal_bar">
          <p>Your Cart</p>
          <button className="modal_btn">
            <div className="modal_btn_stripe"></div>
            <div className="modal_btn_stripe"></div>
          </button>
        </div>
        <div>
          <p className="lead">No items found.</p>
        </div>
      </div>
    </div>
  );
};

export { Modal };

import React from "react";

const Modal = () => {
  return (
    <div className="cart_modal">
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

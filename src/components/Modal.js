import React from "react";
import "./modal.css";

const Modal = ({ children, setIsModalOpen }) => {
  return (
    <div className="signup-modal">
      <div className="modal-wrapper">
        <div
          className="remove-modal-icon "
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

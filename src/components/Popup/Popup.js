import React from "react";

function Popup({ message, isOpen, handleOverlayClose, onClose }) {
  return (
    <div
      className={`notification ${isOpen ? "notification_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className="notification__content">
        <button
          className="notification__close-button"
          type="button"
          onClick={onClose}
        />
        <p className="notification__text">{message}</p>
      </div>
    </div>
  );
}

export default Popup;

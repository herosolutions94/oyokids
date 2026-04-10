"use client";

import { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);

  const POPUP_KEY = "oyo_popup_last_shown";
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const lastShown = localStorage.getItem(POPUP_KEY);
    const now = Date.now();

    if (!lastShown || now - lastShown > THIRTY_DAYS) {
      setShow(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem(POPUP_KEY, Date.now());
    setShow(false);
  };

  const submitPopup = () => {
    localStorage.setItem(POPUP_KEY, Date.now());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-bar"></div>

        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>

        <h2>Be One of the First Teachers</h2>
        <p>Get early access to Oyo Kids platform.</p>

        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />

        <button className="popup-btn" onClick={submitPopup}>
          Reserve My Spot
        </button>

        <button className="popup-link" onClick={closePopup}>
          I'll wait for launch
        </button>
      </div>
    </div>
  );
}
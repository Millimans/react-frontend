import React from "react";
import "./NoRidesFound.css";

export default function NoRidesFound() {
  return (
    <div className="NoRidesFound">
      <div>
        <img src="./sadGhost.jpg" />
      </div>
      <div>
        <h2 className="fst-italic">Didn't find a ride?</h2>
        <div>
          <strong className="fst-italic">
            Get a notification via WhatsApp when a new ride matches your search
          </strong>
        </div>
        <button className="btn ride-alert">Create ride alert</button>
      </div>
    </div>
  );
}

import React from "react";
import "./styles.css";

export default function ProgressBar({ process }) {
  let color = "green";
  if (process > 5) {
    color = "orange";
  }
  return (
    <>
      <div className="outerbar">
        <div
          className="innerbar"
          style={{
            width: `${process}%`,
            background: process > 5 ? "green" : "orange",
          }}
        >
          {process}%
        </div>
      </div>
    </>
  );
}

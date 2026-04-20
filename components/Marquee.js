import React from "react";

export default function Marquee({ variant = "ink", outline = false, items }) {
  const row = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          {t}
          <span className="dot"></span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className={`marquee ${variant} ${outline ? "outline" : ""}`}>
      <div className="track">
        {row}
        {row}
      </div>
    </div>
  );
}

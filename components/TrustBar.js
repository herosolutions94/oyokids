import React from 'react';

export default function TrustBar() {
  // Data array to keep the HTML clean
  const trustItems = [
    { number: "4–11", label: "Age Range" },
    { number: "10+", label: "Ready-Made Lessons" },
    { number: "100%", label: "Native Speaker Audio" },
    { number: "0 min", label: "Prep Time" },
    { number: "Free", label: "To Get Started" },
  ];

  return (
    <div className="trust">
      {trustItems.map((item, index) => (
        <div className="ti" key={index}>
          <span className="ti-n">{item.number}</span>
          <span className="ti-l">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
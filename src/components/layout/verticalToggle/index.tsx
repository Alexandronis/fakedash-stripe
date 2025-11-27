import React from "react";
import './verticalToggle.scss';

const VerticalToggle: React.FC = () => {
  return (
    <div className="vertical-toggle-wrapper">
      <div className="vertical-line" />
      <a
        className="toggle-nav-collapsed"
        role="button"
        style={{ isolation: "isolate" }}
      >
        <div className="toggle-inner-wrapper">
          <div className="toggler toggler-left"></div>
          <div className="toggler toggler-right"></div>
        </div>
      </a>
    </div>
  );
};

export default VerticalToggle;

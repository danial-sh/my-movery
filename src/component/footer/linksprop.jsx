import React from "react";

export default function Linksprop(props) {
  return (
    <div className="footer-link-content cursor d-flex align-center">
      <div className="orange-circle"></div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

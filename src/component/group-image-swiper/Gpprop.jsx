import React from "react";

export default function Gpprop(props) {
  return (
    <div className="d-flex gp-contain">
      <img src={props.first} alt="" className="gp-firstpic" />
      <img src={props.second} alt="" className="gp-second-pic" />
    </div>
  );
}

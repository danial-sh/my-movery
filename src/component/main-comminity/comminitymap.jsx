import React from "react";
import Comminityporp from "./comminityporp";
export default function Comminitymap({ data }) {
  return (
    <div className="comminity fixer d-flex">
      {data.map((v, i) => {
        return <Comminityporp img={v.img} title={v.title} text={v.text}/>;
      })}
    </div>
  );
}

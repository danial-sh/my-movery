import React from "react";
import Conectionprop from "./Conectionprop";
export default function Conectionmap({ data }) {
  return (
    <div className="conection-ways">
      {data.map((v, i) => {
        return (
          <Conectionprop
            img={v.img}
            platformname={v.platformname}
            address={v.address}
          />
        );
      })}
    </div>
  );
}

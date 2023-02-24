import React from "react";
import Detailprop from "./detailprop";
export default function Detailmap({ data }) {
  return (
    <div className="d-flex">
    <div className="search-detail radius d-flex space-between f">
      {data.map((v, i) => {
        return <Detailprop img={v.img} title={v.title} select={v.select} />;
      })}
      <div className="main-detain-search-icon radius d-flex">
        <div className="detail-search-icon radius">
          <img src="images/main/search_white.svg" alt="qwe" />
        </div>
      </div>
    </div>
    </div>
  );
}

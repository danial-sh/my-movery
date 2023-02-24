import React from 'react'

export default function Comminityporp(props) {
  return (
    <div className="d-flex cominity-detail ">
    <div className="cominity-img ">
      <img src={props.img} alt="qwe" />
    </div>
    <div className="comminity-title">
      <h3 className="large-text text-color">{props.title}</h3>
    </div>
    <div className="cominity-content comminity-title">
      <p className="text-color">
        {props.text}
      </p>
    </div>
    <div className="comminity-link d-flex cursor">
      <a href="#">
        Zu den Details{" "}
      </a>
        <img
          src="images/main/right_arrow_black.svg"
          className="link-icon"
          alt="qwe"
        />
    </div>
  </div>
  )
}

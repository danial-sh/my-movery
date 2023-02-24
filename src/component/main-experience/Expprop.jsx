import React from 'react'

export default function Expprop(props) {
  return (
    <div className="d-flex experience-content-detail">
    <img
      src="images/main/checked_green.svg"
      alt="qwe"
      className="exp-detai-img"
    />
    <p className="exp-detail-text">
        {props.text}
    </p>
  </div>
  )
}

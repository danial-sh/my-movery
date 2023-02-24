import React from 'react'

export default function Conectionprop(props) {
  return (
    <div className="conections comminity-title d-flex align-center">
    <div className="conections-before "></div>
    <div className="conection-img">
      <img src={props.img}alt="" />
    </div>
    <div className="conection cursor">
      <p className="conection-platform">{props.platformname}</p>
      <p className="conection-addres larg-text">
        {props.address}
      </p>
    </div>
  </div>
  )
}

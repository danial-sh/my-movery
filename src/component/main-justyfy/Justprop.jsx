import React from 'react'

export default function Justprop(props) {
  return (
    <div className="location-location-detail d-flex">
    <img src="images/main/checked_green.svg" alt="qwe" className="justify-tick"/>
    <p>{props.text}</p>
  </div>
  )
}

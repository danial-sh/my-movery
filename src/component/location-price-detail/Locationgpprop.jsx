import React from 'react'

export default function Locationgpprop(props) {
  return (
    <div>
    <div>
      <img src={props.img} alt="" />
    </div>
    <div className="location-info">
      <div className="location-contain-title">
        <h3>Erholsame Yoga-Auszeit in der Chiemgauer Bergwel</h3>
      </div>
      <div className="location-location-detail d-flex">
        <img
          src="images/main/location_blue.svg"
          alt="qe"
          className="location-image"
        />
        <p>Oyambre, Spanien</p>
      </div>
      <div className="location-location-detail d-flex">
        <img
          src="images/main/date_blue.svg"
          alt="qe"
          className="location-image"
        />
        <p>Juni - September</p>
      </div>
      <div className="border"></div>
      <div className="address-contain d-flex">
        <img
          src="images/main/logo_owl.svg"
          alt=""
          className="address-img"
        />
        <div className="green-circles d-flex ">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="address-address">
          <p>{props.address}</p>
        </div>
      </div>
      <div className="price-contain d-flex">
          <p>
          Ab 
              <span className="text-color price">{props.price}</span>
              Pro Nacht
          </p>
        <div className="d-flex align-center">
          <p>Im Preis enthalten</p>
          <img src="images/main/shape.svg" alt="111" className="price-image"/>
        </div>
      </div>
    </div>
  </div>
  )
}

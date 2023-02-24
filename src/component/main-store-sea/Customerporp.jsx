import React from 'react'

export default function Customerporp(props) {
  return (
    <div className="customer-rate radius">
            <div className="customer-container-1 d-flex space-between gp-firstpic">
              <div className="d-flex align-center">
                <h3 className="name">{props.name}</h3>
                <div className="star d-flex">
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                  <img src="images/main/star_yellow.svg" alt="qwe" />
                </div>
              </div>
              <div className="coment-date d-flex align-center">
                <img
                  src="images/main/date_gray.svg"
                  alt="qe"
                  className="name date-img"
                />
                <span>25.05.2022</span>
              </div>
            </div>
            <div className="coment-content gp-firstpic">
              <p>
                {props.comment}
              </p>
            </div>
            <div className="border"></div>
            <div className="customer-coment-picture d-flex ">
              <img src={props.pic} alt="qwe" className="coment-pic resize-img "/>
              <p>{props.picname}</p>
            </div>
          </div>
  )
}

import React from "react";

export default function Newletter() {
  return (
    <div className="fixer news-letter d-flex">
      <div className="d-flex news-gp-images">
          <img src="images/main/new2.svg" alt="qwe" className="news-letter-first-pic" />
          <img src="images/main/new1.svg" alt="qwe" className="news-letter-second-pic"/>
          <img src="images/main/new3.svg" alt="qwe" className="news-letter-third-pic"/>
      </div>
      <div className="news-letter-content d-flex">
        <div className="entecke-title text-color">
          <h3>Moverii Newletter</h3>
        </div>
          <p className="comminity-title">Erhalte Inspiration & exklusive Rabatte für deine Sportreise:</p>
        <div className="news-letter-text">
          <p>
            Sign up for our Tourlane newsletter and you'll get real insider tips
            on off-the-beaten-path destinations, cool itineraries, and unique
            accommodations!
          </p>
        </div>
        <div className="news-letter-inp d-flex">
          <input type="text" name="" id="" className="letter-inp radius" placeholder="Enter your Email Address"/>
          <p className="letter-button sea-button">submit</p>
        </div>
      </div>
    </div>
  );
}

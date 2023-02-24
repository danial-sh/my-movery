import React from "react";
import Conectionmap from "./Conectionmap";
import Creditmap from "./Creditmap";
import Linkmap from "./Linkmap";
import Socialmap from "./Socialmap";
export default function Footer() {
  const conection = [
    {
      img: "images/main/call.svg",
      platformname: "Phone",
      address: "+49 (0)228 7638 2040",
    },
    {
      img: "images/main/message.svg",
      platformname: "Email",
      address: "Team@Moverii.de",
    },
    {
      img: "images/main/whatsapp.svg",
      platformname: "Whatsapp",
      address: "+49 (0)163 3122 260",
    },
  ];
  const links = [
    { text: "Reisemagazin" },
    { text: "Über uns" },
    { text: "Covid 19 Informationen" },
    { text: "Stornierungsbedingungen" },
    { text: "FAQs" },
    { text: "Partner werden" },
    { text: "Reiseschutz" },
    { text: "Geschenkgutscheine" },
  ];
  const card = [
    { img: "images/main/company1.svg" },
    { img: "images/main/company2.svg" },
    { img: "images/main/company3.svg" },
    { img: "images/main/company4.svg" },
  ];
  const provide = [
    { img: "images/main/provid1.svg", class: "provide-first-pic" },
    { img: "images/main/provid2.svg" },
  ];
  const social = [
    { img: "images/main/Instagram.svg" },
    { img: "images/main/Twitter.svg" },
    { img: "images/main/Linkedin.svg" },
    { img: "images/main/Facebook.svg" },
    { img: "images/main/Youtube.svg" },
  ];
  return (
    <div className="footer-bg">
      <div className="footer-main-img">
        <img src="images/main/logo.svg" alt="qwe" />
      </div>
      <div className="my-footer-contains d-flex space-between">
        <div className="footer-call">
          <p className="footer-call-title">
            Wenn du aufgrund von Corona bedingten Umständen deine Reise
            nichtantreten kannst, hast du die Möglichkeit bis zu 24 Stunden
            vorherkostenfrei umzubuchen.
          </p>
          <p className="comminity-title">
            {" "}
            Wir stehen dir zu jedem Zeitpunkt deiner Reise persönlich zur Seite-
            kontaktiere uns einfach:
          </p>
          <Conectionmap data={conection} />
        </div>
        <Linkmap data={links} />
        <div className="footer-social-detail">
          <div className="credit-card-provide d-flex">
            <div className="credit-card">
              <p className="comminity-title">
                Wir legen großen Wert auf Datenschutz und sichere Zahlungsmet
              </p>
              <Creditmap data={card} />
            </div>
            <div className="provide">
              <p className="comminity-title">
                Unsere Kunden bewerten uns mit SEHR GUT!
              </p>
              <Creditmap data={provide} />
            </div>
          </div>
          <div className="social-detail">
            <div className="back-social d-flex">
            <p className="location-info">
              Entdecke mehr Storys rund um Sportreisen:
            </p>
            <Socialmap data={social}/>
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              className="border"
            ></div>
            <p> 2022 moverii. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

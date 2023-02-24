import React from "react";
import Customermap from "./Customermap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
import "swiper/css/lazy";
import "swiper/css/a11y";
export default function Storesea() {
  const info = [
    {
      name: "Fabi",
      comment:
        "Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch! :)",
      pic: "images/main/travel1.svg",
      picname: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwelt",
    },
    {
      name: "Paula",
      comment:
        "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
      pic: "images/main/travel2.svg",
      picname: "Umgeben von Natur:Surfurlaub im entspannten Sagres",
    },
    {
      name: "Melina",
      comment:
        "Einfach klasse! Daniel von moverii hat mir super bei der kurzfristigen Reiseplanung weitergeholfen. Das Hostel lag direkt am Strand, das Team dort war super nett und hilfsbereit und die surfstunden haben auch Spaß gemacht. Sehr verdiente 5 Sterne!",
      pic: "images/main/travel3.svg",
      picname: "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel",
    },
  ];
  const info1=[   {
    name: "Fabi",
    comment:
      "Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch! :)",
    pic: "images/main/travel1.svg",
    picname: "Erholsame Yoga-Auszeit in der Chiemgauer Bergwelt",
  },]
  const info2=[
    {
      name: "Paula",
      comment:
        "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
      pic: "images/main/travel2.svg",
      picname: "Umgeben von Natur:Surfurlaub im entspannten Sagres",
    },
  ]
  const info3=[  {
    name: "Melina",
    comment:
      "Einfach klasse! Daniel von moverii hat mir super bei der kurzfristigen Reiseplanung weitergeholfen. Das Hostel lag direkt am Strand, das Team dort war super nett und hilfsbereit und die surfstunden haben auch Spaß gemacht. Sehr verdiente 5 Sterne!",
    pic: "images/main/travel3.svg",
    picname: "Surfcamp in Westfrankreich: Surfen weit weg vom Trubel",
  }]
  return (
    <div className="main-sotre-sea">
      <div className="main-store fixer">
        <div className="entecke-title text-color">
          <h3>Das sagen Reisende über ihren Surfurlaub in Europa</h3>
        </div>
        <Customermap data={info}/>
      </div>
      <div className="fixer main-sea">
        <div className="entecke-title text-color">
          <h3>Geschichten aus unserem Reisemagazin</h3>
        </div>
        <div className="d-flex seain">
          <div className="sea-gp-image">
            <div className="sea-first-pic radius">
            <img
              src="images/main/stories1.svg"
              alt="qwe"
            />
            </div>
            <div  className="sea-second-pic radius">
            <img
              src="images/main/stories2.svg"
              alt="qwe"
            />
            </div>
            <div  className="sea-third-pic radius">
            <img
              src="images/main/stories3.svg"
              alt="qwe"
            />
            </div>
          </div>
          <div className="sea-content">
            <div className="text-color comminity-title">
              <h3 className="larg-text">
                Surfcamps in Europa:Entdecke die Vielfalt unseres Kontinents
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus Mattis pellentesque id nibh tortor id aliquet
              lectus proin Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum Ullamcorper velit sed ullamcorper morbi .
            </p>
            <div className="sea-button">
              <span>Read more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

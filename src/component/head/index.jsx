import React from "react";

export default function Myheader() {
  return (
    <div className="movery-header d-flex align-center">
      <div className="header-option d-flex">
        <div className="header-img">
          <img src="images/main/logo.svg" alt="qwe" />
        </div>
        <p className="text-color space">FAQs</p>
        <p className="text-color space">Kontakt</p>
        <p className="text-color space">Blog</p>
        <p className="text-color space">Anmelden</p>
      </div>
      <div className="header-action d-flex ">
        <div className="header-search  space  cursor">
            <img src="images/main/search.svg" alt="ww"/>
        </div>
        <div className="header-heart space  cursor">
            <img src="images/main/like.svg" alt="123"/>
        </div>
        <div className="header-register cursor ">
            <p className=" white-text">Registrieren</p>
        </div>
      </div>
      <div className="sidemenu">
        <div className="menus-bar"></div>
        <div className="menus-bar"></div>
        <div className="menus-bar"></div>
      </div>
    </div>
  );
}

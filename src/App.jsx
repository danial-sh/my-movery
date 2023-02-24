import "./style/App.css";
import { useState } from "react";
import Myheader from "./component/head";
import Maindetail from "./component/main-detail";
import Comminity from "./component/main-comminity";
import Entdecke from "./component/main-entdecke-images/Entdecke";
import Beliebte from "./component/main-beliebte-swiper/Beliebte";
import Experence from "./component/main-experience/Experence";
import Gpswiper from "./component/group-image-swiper/gpswiper";
import Locationprice from "./component/location-price-detail/Locationprice";
import Justify from "./component/main-justyfy/Justify";
import Storesea from "./component/main-store-sea/Store-sea";
import Newletter from "./component/movery-newletter/New";
import Footerswiper from "./component/footer-icons/Footer-swiper";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <Myheader />
      <Maindetail />
      <Comminity />
      <Entdecke />
      <Beliebte />
      <Experence />
      <Gpswiper />
      <Locationprice />
      <Justify/>
      <Storesea/>
      <Newletter/>
      <Footerswiper/>
      <Footer/>
    </div>
  );
}

export default App;

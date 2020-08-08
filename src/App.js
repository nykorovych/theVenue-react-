import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo";
import Heighlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App" style={{ height: "1532px", background: "white" }}>
      <Header></Header>
      <Featured></Featured>
      <VenueNfo></VenueNfo>
      <Element name='highlights'>
        <Heighlights></Heighlights>
      </Element>
      <Pricing></Pricing>
      <Location></Location>
      <Footer></Footer>
    </div>
  );
};

export default App;

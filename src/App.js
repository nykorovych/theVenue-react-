import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo";
import Heighlights from "./components/Highlights";

const App = () => {
  return (
    <div className="App" style={{ height: "1532px", background: "white" }}>
      <Header></Header>
      <Featured></Featured>
      <VenueNfo></VenueNfo>
      <Heighlights></Heighlights>
    </div>
  );
};

export default App;

import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    des: ["first description", "second description", "third description"],
    linkto: ["http://googel.com", "http://twitch.tv", "http://gmail.com"],
    delay: [500, 100, 500],
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
                <span>{this.state.prices[i]}</span>
                <span>{this.state.positions[i]}</span>
                </div>
            <div className="pricing_description">{this.state.des[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                collor="#ffffff"
                bck="#ffa800"
                text="Purchase"
                link={this.state.linkto[i]}
              ></MyButton>
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
export default Pricing;

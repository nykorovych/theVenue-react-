import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class TimeUntil extends Component {
  state = {
    deadLine: "Jul, 17, 2021",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.state.deadLine);
    }, 1000);
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({days, seconds,minutes,hours })
    }
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts IN</div>
          <div className="countdown_bottom">
            <Slide left delay={1100}>
              <div className="countdown_item">
                <div className="countdown_time">{this.state.days}</div>
                <div className="countdown_tag">days</div>
              </div>
            </Slide>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default TimeUntil;

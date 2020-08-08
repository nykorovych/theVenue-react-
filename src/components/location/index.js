import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39095.740480580265!2d20.92298239723922!3d52.23459593460104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb6f8e14ac0f%3A0x1add992cf12ebb89!2sWola%2C%20Warsaw!5e0!3m2!1sen!2spl!4v1596843495779!5m2!1sen!2spl"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="myFrame"
      ></iframe>
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
};

export default Location;

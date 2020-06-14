import React from "react";
import "./aboutMe.css";

class AboutMe extends React.Component {
  render() {
    const { scrollClass } = this.props;
    return (
      <div className={`about-me-bg ${scrollClass}`}>
        <h1 className="about-me-title">
          About Me
        </h1>
      </div>
    );
  }
}

export default AboutMe;

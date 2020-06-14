import React from "react";
import "./landingPage.css";

class LandingPage extends React.Component {
  render() {
    const { scrollClass } = this.props;
    return (
      <div className={`landing-bg ${scrollClass}`}>
        <h1 className="landing-title">
          Jonathan <br /> Salazar <br />{" "}
          <p className="subtitle">
            Other text like a zinger but like I have no idea what to put here rn.
          </p>
        </h1>
      </div>
    );
  }
}

export default LandingPage;

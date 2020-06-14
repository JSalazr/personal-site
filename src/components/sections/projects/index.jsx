import React from "react";
import "./projects.css";

class Projects extends React.Component {
  render() {
    const { scrollClass } = this.props;
    return (
      <div className={`projects-bg ${scrollClass}`}>
      <div className="projects-bg"></div>
        <h1 className="projects-title">
          Projects
        </h1>
      </div>
    );
  }
}

export default Projects;

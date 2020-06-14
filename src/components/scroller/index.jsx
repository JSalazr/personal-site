import React from 'react';
import LandingPage from '../sections/landingPage';
import AboutMe from '../sections/aboutMe';
import Projects from '../sections/projects';
import "./scroller.css";

class Scroller extends React.Component {
  state = {
    prevPage: 0
  };

  scrollClasses = [
    'page-1',
    'page-2',
    'page-3',
  ]

  getScrollClass = (currentPage) => {
    return this.scrollClasses[currentPage]
  }

  render() {
    const { currentPage } = this.props;
    const scrollClass = this.getScrollClass(currentPage);
    return (
      <div className='viewArea'>
        <LandingPage scrollClass={`scroll ${scrollClass}`}/>
        <AboutMe scrollClass={`scroll ${scrollClass}`}/>
        <Projects  scrollClass={`scroll ${scrollClass}`}/>
      </div>
    );
  }
}

export default Scroller;

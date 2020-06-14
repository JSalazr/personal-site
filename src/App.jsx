import React from 'react';
// import Scroller from './components/scroller';
import LandingPage from './components/sections/landingPage';
import Navbar from './components/navbar';
import AboutMe from './components/sections/aboutMe';
import ReactPageScroller from 'react-page-scroller'
import Projects from './components/sections/projects';

class App extends React.Component {
  state = {
    currentPage: 0,
  };

  pageScroll = (currentPage) => {
    console.log("test");
    this.setState({
      currentPage
    });
  }

  render(){
    return (
      <>
        <ReactPageScroller pageOnChange={this.pageScroll}>
          <LandingPage />
          <AboutMe />
          <Projects />
        </ReactPageScroller>
        <Navbar currentPage={this.state.currentPage}/>
      </>
    )
  }
}

export default App;

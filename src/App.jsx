import React from 'react';
// import Scroller from './components/scroller';
import Navbar from './components/navbar';
import Scroller from './components/scroller';
import { throttle } from "underscore";

class App extends React.Component {
  state = {
    currentPage: 0,
    pagesStates: [{}, {}, {}]
  };

  componentDidMount() {
    window.addEventListener('wheel', throttle(this.handleScroll, 1000, {leading: false, trailing: false}));
    window.addEventListener('keydown', throttle(this.handleKeyPress, 1000, {leading: false, trailing: false}));
  }

  pageScroll = (isScrollDown) => {
    this.setState({
      currentPage: this.getNewPage(isScrollDown)
    });
  }

  getNewPage(isScrollDown){
    const {currentPage} = this.state;
    if(isScrollDown){
      return currentPage < 2 ? currentPage + 1 : currentPage 
    }else{
      return currentPage > 0 ? currentPage - 1 : currentPage
    }
  }

  handleScroll = (event) => {
    this.pageScroll(event.deltaY > 0)
  }

  handleKeyPress = (event) => {
    if(event.key === 'ArrowDown') this.pageScroll(true)
    if(event.key === 'ArrowUp') this.pageScroll(false)
  }

  render(){
    const { currentPage } = this.state;
    return (
      <>
        <Scroller currentPage={currentPage} />
        <Navbar currentPage={currentPage}/>
      </>
    )
  }
}

export default App;

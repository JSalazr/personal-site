import React from "react";
import NavbarItem from "./navbarItem";
import "./navbar.css";
class Navbar extends React.Component {
  state = {
    navbarClass: ''
  };

  componentDidUpdate(prevProps) {
    const prevPage = prevProps.currentPage;
    const { currentPage } = this.props;
    if(prevPage !== currentPage){
      this.setState({
        navbarClass: currentPage === 0 ? ' scroll-bottom' : ' scroll-top'
      })
    }
  }

  render() {
    return (
      <ul className={'navbar-container' + this.state.navbarClass}>
        <NavbarItem itemTag="About me" />
        <NavbarItem itemTag="Portfolio" />
        <NavbarItem itemTag="Contact" />
      </ul>
    );
  }
}

export default Navbar;

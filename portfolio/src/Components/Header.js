import React, { Component, useEffect } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }
    return (
      <header id="home" className="parallax-header">
        <div className="overlay"></div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text animated fadeIn">
            <h1 className="responsive-headline animated slideInDown">{name}</h1>
            <h3 className="animated slideInUp delay-1s">
              <span>{occupation}</span> {description}
            </h3>
            <hr className="animated fadeIn delay-1s" />
            <ul className="social animated fadeIn delay-1s">{networks}</ul>
            <div className="animated fadeIn delay-2s">
              <a href="#about" className="button smoothscroll animated pulse infinite slower">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
        <p className="scrolldown animated bounce infinite slower delay-2s">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        <div className="particles-container">
          <div className="particle particle1"></div>
          <div className="particle particle2"></div>
          <div className="particle particle3"></div>
          <div className="particle particle4"></div>
          <div className="particle particle5"></div>
          <div className="particle particle6"></div>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
require("../../public/resumeData.json");

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var image = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns" data-aos="fade-right">
            <img className="profile-pic" src={image} alt="" />
          </div>
          <div className="nine columns main-col" data-aos="fade-left" data-aos-delay="300">
            <h2 data-aos="fade-up">About Me</h2>
            <div className="bio-text" data-aos="fade-up" data-aos-delay="400">
              <p>{bio.split('. ').map((sentence, index, array) => 
                index < array.length - 1 ? 
                  <span key={index}>{sentence}. <br/></span> : 
                  <span key={index}>{sentence}</span>
              )}
              </p>
            </div>
            <div className="row">
              <div className="columns contact-details"></div>
              <div className="columns download" data-aos="zoom-in" data-aos-delay="600">
                <p>
                  <a
                    href={resumeDownload}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

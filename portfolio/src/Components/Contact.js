import React, { Component } from "react";

class Contact extends Component {

  render() {
    // Using props data is optional for this component
    // since we've made it a standalone interactive element
    if (this.props.data) {
      // Data available if needed for future enhancements
    }

    return (
      <section id="contact" className="contact-section">
        <div className="contact-container" data-aos="fade-up">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <i className="fa fa-linkedin"></i>
                <h3>Let's Connect</h3>
                <p>Click to visit my LinkedIn profile</p>
              </div>
              <div className="flip-card-back">
                <h3>Ayyah Saleh</h3>
                <p>Connect with me on LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/ayyahsaleh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-button"
                >
                  <i className="fa fa-external-link"></i> Visit Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

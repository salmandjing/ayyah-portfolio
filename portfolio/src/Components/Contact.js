import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    (name.value = ""), event.preventDefault();
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
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
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">
              {" "}
              Please feel free to reach out if you want to talk about
              professional development, finance, life, or anything in between.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

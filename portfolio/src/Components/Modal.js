import React, { Component } from "react";

class Modal extends Component {
  handleClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { project, onClose } = this.props;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={this.handleClick}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
}

export default Modal;

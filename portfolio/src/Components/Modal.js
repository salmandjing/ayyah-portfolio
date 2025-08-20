import React, { Component } from "react";

class Modal extends Component {
  handleClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { project, onClose } = this.props;
    const imageUrl = "images/portfolio/" + project.image;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={this.handleClick}>
          <div className="modal-header">
            <h2>{project.title}</h2>
            <span className="close-button" onClick={onClose}>&times;</span>
          </div>
          <div className="modal-body">
            <div className="modal-image">
              <img src={imageUrl} alt={project.title} />
            </div>
            <div className="modal-description">
              <p>{project.description}</p>
              <div className="modal-tags">
                <span className="tag">{project.tags}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

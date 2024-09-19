import React, { Component } from "react";
import Modal from "./Modal"; // We'll create this component next

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null,
    };
  }

  openModal = (project) => {
    this.setState({ selectedProject: project });
  };

  closeModal = () => {
    this.setState({ selectedProject: null });
  };

  render() {
    if (!this.props.data) return null;

    const portfolio = this.props.data.projects.map((project) => {
      const imageUrl = "images/portfolio/" + project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div onClick={() => this.openModal(project)}>
              <img alt={project.title} src={imageUrl} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p className="display-linebreak">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Here are some of my ongoing projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolio}
            </div>
          </div>
        </div>
        {this.state.selectedProject && (
          <Modal
            project={this.state.selectedProject}
            onClose={this.closeModal}
          />
        )}
      </section>
    );
  }
}

export default Portfolio;

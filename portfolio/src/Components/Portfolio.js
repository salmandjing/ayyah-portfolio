import React, { Component, useEffect } from "react";
import Modal from "./Modal";

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

    const portfolio = this.props.data.projects.map((project, index) => {
      const imageUrl = "images/portfolio/" + project.image;
      return (
        <div key={project.title} className="columns portfolio-item" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
          <div className="item-wrap">
            <div onClick={() => this.openModal(project)} className="portfolio-card">
              <div className="portfolio-image">
                <img alt={project.title} src={imageUrl} />
              </div>
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5 className="portfolio-item-title">{project.title}</h5>
                  <p className="portfolio-item-category display-linebreak">
                    {project.category}
                  </p>
                  <span className="view-project">View Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio" className="portfolio-section">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 className="section-title" data-aos="fade-up">
Ongoing Legal Projects
            </h1>
            <div className="portfolio-intro" data-aos="fade-up" data-aos-delay="200">
              <p>Explore my current legal research and advocacy projects</p>
            </div>
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

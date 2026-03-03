import { useState, useEffect } from 'react'
import { resumeData } from './data'
import { useScrollFade } from './useScrollFade'
import './App.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  { icon: '\u2696\ufe0f', name: 'Legal Research', detail: 'Westlaw, LexisNexis, case analysis' },
  { icon: '\ud83c\udf10', name: 'Multilingual', detail: 'Arabic, Spanish, Dari, Farsi' },
  { icon: '\ud83d\udcdc', name: 'Immigration Law', detail: 'USCIS petitions, FOIA requests, adjustments of status' },
  { icon: '\ud83d\udcbc', name: 'Corporate Litigation', detail: 'Document review, tort defense, case strategy' },
  { icon: '\ud83c\udfaf', name: 'Grant Management', detail: 'Federal & state applications, project management' },
  { icon: '\ud83d\udde3\ufe0f', name: 'Oral Advocacy', detail: 'Moot court, debate champion, client advocacy' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const aboutRef = useScrollFade()
  const expRef = useScrollFade()
  const eduRef = useScrollFade()
  const researchRef = useScrollFade()
  const skillsRef = useScrollFade()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { main, resume, portfolio } = resumeData

  return (
    <>
      {/* Navigation */}
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">AS</a>
          <div className={`nav-links${mobileOpen ? ' open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">University of Nebraska-Lincoln College of Law</span>
            <h1 className="hero-name">{main.name}</h1>
            <p className="hero-title">
              J.D. Candidate &middot; Henry Foster Scholar &middot; Multilingual Advocate
            </p>
            <div className="hero-actions">
              <a
                href={main.social[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn Profile
              </a>
              <a
                href={main.resumedownload}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="/images/profilepic.jpg"
              alt={main.name}
            />
          </div>
        </div>
        <a href="#about" className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </a>
      </section>

      {/* About */}
      <section className="section section-cream" id="about" ref={aboutRef}>
        <div className="section-inner">
          <div className="section-header fade-in">
            <p className="section-label">About</p>
            <h2 className="section-heading">{main.name}</h2>
            <hr className="section-rule" />
          </div>
          <div className="about-grid">
            <div className="fade-in">
              <p className="about-bio">{main.bio}</p>
            </div>
            <div className="about-highlights">
              <div className="about-highlight-card fade-in">
                <h4>Henry Foster Scholar</h4>
                <p>Prestigious scholarship recipient at UNL College of Law, recognizing academic excellence and commitment to the legal profession.</p>
              </div>
              <div className="about-highlight-card fade-in">
                <h4>Four Languages</h4>
                <p>Fluent in Arabic, Spanish, Dari, and Farsi — enabling direct client communication across diverse communities.</p>
              </div>
              <div className="about-highlight-card fade-in">
                <h4>Debate Champion</h4>
                <p>Former Debate Team Captain and Champion at CSU Sacramento, bringing sharp advocacy and persuasive skills to the courtroom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section section-white" id="experience" ref={expRef}>
        <div className="section-inner">
          <div className="section-header fade-in">
            <p className="section-label">Experience</p>
            <h2 className="section-heading">Professional Background</h2>
            <hr className="section-rule" />
          </div>
          <div className="timeline">
            {resume.work.map((job) => (
              <div key={job.company} className="timeline-item fade-in">
                <p className="timeline-years">{job.years}</p>
                <h3 className="timeline-title">{job.title}</h3>
                <p className="timeline-company">{job.company}</p>
                <p className="timeline-desc">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section section-dark" id="education" ref={eduRef}>
        <div className="section-inner">
          <div className="section-header fade-in">
            <p className="section-label">Education</p>
            <h2 className="section-heading" style={{ color: 'var(--white)' }}>Academic Background</h2>
            <hr className="section-rule" />
          </div>
          <div className="education-grid">
            {resume.education.map((edu) => (
              <div key={edu.school} className="education-card fade-in">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-year">{edu.graduated}</p>
                <p className="education-desc">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Projects */}
      <section className="section section-cream" id="research" ref={researchRef}>
        <div className="section-inner">
          <div className="section-header fade-in">
            <p className="section-label">Research & Projects</p>
            <h2 className="section-heading">Scholarly Work</h2>
            <hr className="section-rule" />
          </div>
          <div className="projects-grid">
            {portfolio.projects.map((project) => (
              <div key={project.title} className="project-card fade-in">
                <img
                  className="project-image"
                  src={`/images/portfolio/${project.image}`}
                  alt={project.title}
                />
                <div className="project-body">
                  <span className="project-tag">{project.tags}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section section-dark" id="skills" ref={skillsRef}>
        <div className="section-inner">
          <div className="section-header fade-in">
            <p className="section-label">Competencies</p>
            <h2 className="section-heading" style={{ color: 'var(--white)' }}>Areas of Expertise</h2>
            <hr className="section-rule" />
          </div>
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="skill-item fade-in">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-detail">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <h2 className="footer-heading">Get in Touch</h2>
          <p className="footer-text">
            Interested in connecting? I&apos;m always open to discussing legal opportunities,
            research collaborations, and professional networking.
          </p>
          <div className="footer-links">
            <a
              href={main.social[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-link-primary"
            >
              Connect on LinkedIn
            </a>
            <a
              href={main.resumedownload}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link footer-link-secondary"
            >
              Download Resume
            </a>
          </div>
          <hr className="footer-rule" />
          <p className="footer-copy">&copy; {new Date().getFullYear()} {main.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App

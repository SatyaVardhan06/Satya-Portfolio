import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import profile from "./assets/profile.jpg";
function Home() {
  return (
    <div className="page">
      <div className="hero-card">
        <div className="hero-left">
          <img src={profile} alt="Profile" className="profile-img" />
        </div>

        <div className="hero-right">
          <h1 className="main-heading">Satya Vardhan</h1>
          <p className="hero-subtitle">Integrated Computer Science Student</p>
          <p className="hero-text">
            I am passionate about web development, artificial intelligence,
            and software development. I enjoy building modern applications,
            solving problems, and learning new technologies that can create
            real-world impact.
          </p>
        </div>
      </div>

      <div className="content-grid">
        <div className="info-card">
          <h2>Research Interests</h2>
          <p>
            Natural Language Processing, Machine Learning, Data Visualization,
            Web Technologies, and Software Engineering.
          </p>
        </div>

        <div className="info-card">
          <h2>Personal Details</h2>
          <div className="details-box">
            <p><b>Name:</b> Satya Vardhan</p>
            <p><b>Phone:</b> 8688624203</p>
            <p><b>Personal Email:</b> satyavardhankarothu2006@gmail.com</p>
            <p><b>College Email:</b> se23umcs022@mahindrauniversity.edu.in</p>
            <p><b>Location:</b> Hyderabad, India</p>
          </div>
        </div>

        <div className="info-card">
          <h2>About Me</h2>
          <p>
            I am an Integrated Computer Science student interested in creating
            user-friendly websites, exploring AI concepts, and developing
            practical software solutions for real problems.
          </p>
        </div>

        <div className="info-card">
          <h2>Skills</h2>
          <div className="skills-container">
            <span className="skill-badge">HTML</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Python</span>
            <span className="skill-badge">Java</span>
            <span className="skill-badge">C</span>
            <span className="skill-badge">GitHub</span>
          </div>
        </div>
      </div>

      <div className="footer">
        © 2026 Satya Vardhan | Portfolio Website
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="page">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Law Summarizer</h3>
          <p>
            An NLP-based project that simplifies legal text into
            easy-to-understand language for better accessibility and learning.
          </p>
          <a
            href="https://github.com/your-username/law-summarizer"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repository
          </a>
        </div>

        <div className="project-card">
          <h3>Student Performance Visualization Tool</h3>
          <p>
            A web-based project that visualizes student performance using charts,
            comparisons, and interactive presentation of academic data.
          </p>
          <a
            href="https://github.com/Karthikeya029/SE-Project"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repository
          </a>
        </div>

        <div className="project-card">
          <h3>Glitch Game</h3>
          <p>
            A Java-based desktop application developed to provide an engaging
            and interactive gaming experience with a clean user interface.
          </p>
          <a
            href="https://github.com/your-username/glitch-game"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repository
          </a>
        </div>
      </div>

      <div className="footer">
        © 2026 Satya Vardhan | Projects Portfolio
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
      >
        Projects
      </NavLink>
    </nav>
  );
}
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
import React, { useMemo, useState, useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
// Use public/profile.jpg for the profile image
// ...existing code...

const sections = [
  {
    id: 'about',
    title: 'About Me',
    content:
      'I am a Mumbai-based Systems Engineer at Tata Consultancy Services who builds dependable banking services and clean front-end experiences. I value simple design, real user value, and practical solutions that are easy for people to understand.',
  },
  {
    id: 'experience',
    title: 'Experience',
    content:
      'At TCS, I engineered core banking modules like Customer Enquiry using Java and Spring Boot, created scalable REST APIs for mobile and web channels, and built Kafka-powered transaction processing to improve reliability and speed.',
    bullets: [
      'Designed core banking modules for high-volume transactional workflows.',
      'Implemented APIs with low-latency responses under 200 ms.',
      'Built a transaction reversal scheduler using multithreading, PostgreSQL, and Kafka.',
      'Improved system throughput through query optimization, indexing, and caching.',
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    content:
      'Support Ticket Management System — Java 17, Spring Boot, ReactJS, MySQL, JWT. Developed a role-based Support Ticket Management System for secure ticket lifecycle handling, dashboard metrics, and efficient issue tracking.',
  },
];

const skills = [
  'Java',
  'C++',
  'Python',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  'ReactJS',
  'Spring Boot',
  'Hibernate/JPA',
  'PostgreSQL',
  'MongoDB',
  'Kafka',
  'RabbitMQ',
  'Git',
  'Docker',
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/nayanCode' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/NayanShingare' },
  { label: 'Mail', href: 'mailto:nayanshingare93@gmail.com' },
];

// ...existing code...

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore (server-side or unsupported)
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nayanshingare93@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback: nothing
    }
  };


  return (
    <div className="page-shell">
      <div className="background-glow" />
      <main className="cv-container">
        <nav className="site-nav">
          <div className="nav-brand">
            <span className="nav-logo-placeholder">NS</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a className="btn" href="/resume.pdf" download>
              Download CV
            </a>
            <button className="btn theme-toggle" onClick={toggleTheme} aria-pressed={theme === 'dark'} title="Toggle theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow role">Fullstack Java Developer</p>
            <h1>Nayan Shingare</h1>
            <p className="hero-description">
              Mumbai-based engineer building dependable banking systems and expressive front-end experiences with React, Spring Boot, and modern APIs.
            </p>
            <div className="hero-meta">
              <span>Mumbai, Maharashtra</span>
              <span>Java · Spring Boot . Security . React</span>
            </div>
          </div> 
        </section>

        <About />
        <Experience />
        <Projects />
        <Skills skills={skills} />
        <Contact socials={socials} copyEmail={copyEmail} copied={copied} />
      </main>
    </div>
  );
}
export default App;

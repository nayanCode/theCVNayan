const sections = [
  {
    id: 'about',
    title: 'About me',
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
    title: 'Project',
    content:
      'Online Movie Ticket Booking System — Java 17, Spring Boot, ReactJS, MySQL, JWT. Developed a role-based Support Ticket Management System for secure ticket lifecycle handling, dashboard metrics, and efficient issue tracking.',
  },
  {
    id: 'education',
    title: 'Education',
    content: 'University of Mumbai, B.Tech in Computer Engineering, CGPI 8.32 (2019 – 2023).',
  },
  {
    id: 'achievements',
    title: 'Achievements',
    content:
      'Fresco Play Miles Award · Special Initiative Award · Employee of the Month · Solved 1315+ problems on LeetCode (Global Rank: 8,180).',
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

function App() {
  return (
    <div className="page-shell">
      <div className="background-glow" />
      <main className="cv-container">
        <nav className="site-nav">
          <div className="nav-brand">Nayan</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <header className="hero-card">
          <div>
            <p className="eyebrow">Nayan Shingare</p>
            <h1>Systems Engineer</h1>
            <p className="hero-description">
              Mumbai-based engineer with hands-on experience in core banking systems, Spring Boot services, and responsive React interfaces. I prefer clean, human-friendly solutions over flashy designs.
            </p>
          </div>
          <div className="hero-meta">
            <span>Mumbai, Maharashtra</span>
            <span>Java · Spring Boot</span>
            <span>ReactJS · PostgreSQL</span>
          </div>
        </header>

        <section className="section-card" id="about">
          <h2>About</h2>
          <p>
            I build stable, maintainable systems for real-world banking workflows and translate technical requirements into practical products.
            My work is meant to feel approachable and useful, not over-designed. I care about how people interact with the result.
          </p>
        </section>

        <section className="two-column-grid">
          <article className="detail-card" id="experience">
            <h3>Experience</h3>
            <p>
              Tata Consultancy Services — Systems Engineer (Oct 2023 – Present)
            </p>
            <ul>
              <li>Engineered core banking modules using Java and Spring Boot.</li>
              <li>Built scalable REST APIs with low-latency responses under 200 ms.</li>
              <li>Created a transaction reversal scheduler using multithreading, PostgreSQL, and Kafka.</li>
              <li>Optimized queries and caching to reduce execution time by 30%+.</li>
            </ul>
          </article>

          <article className="detail-card" id="projects">
            <h3>Project</h3>
            <p>
              Online Movie Ticket Booking System — Java 17, Spring Boot, ReactJS, MySQL, JWT.
            </p>
            <ul>
              <li>Built a role-based support ticket system with secure authentication.</li>
              <li>Implemented ticket categorization, priority handling, comments, and dashboard metrics.</li>
            </ul>
          </article>
        </section>

        <section className="section-card" id="skills">
          <h2>Skills</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="two-column-grid">
          <article className="detail-card">
            <h3>Education</h3>
            <p>University of Mumbai, B.Tech in Computer Engineering, CGPI 8.32 (2019 – 2023).</p>
          </article>

          <article className="detail-card">
            <h3>Achievements</h3>
            <p>Fresco Play Miles Award · Special Initiative Award · Employee of the Month</p>
            <p>Solved 1315+ problems on LeetCode (Global Rank: 8,180).</p>
          </article>
        </section>

        <section className="section-card" id="contact">
          <h2>Contact</h2>
          <div className="social-links">
            {socials.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

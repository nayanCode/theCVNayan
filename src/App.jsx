import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

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
      'Support Ticket Management System — Java 17, Spring Boot, ReactJS, MySQL, JWT. Developed a role-based Support Ticket Management System for secure ticket lifecycle handling, dashboard metrics, and efficient issue tracking.',
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

function FloatingSkill({ text, position, speed }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.18;
    ref.current.rotation.y = t * 0.55;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <icosahedronGeometry args={[0.18, 1]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.55} roughness={0.3} />
      </mesh>
      <Html center distanceFactor={5} className="skill-bubble">
        {text}
      </Html>
    </group>
  );
}

function RotatingCard() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <group ref={ref}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 1.9, 0.14]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.16} />
      </mesh>
      <Html center wrapperClass="canvas-card" position={[0, 0, 0.08]} transform occlude>
        <div className="canvas-card-inner">
          <p className="eyebrow">3D Resume</p>
          <h2>Nayan Shingare</h2>
          <p>Systems Engineer · React / Spring Boot · Banking APIs</p>
          <div className="canvas-meta">
            <span>Mumbai</span>
            <span>Java · React</span>
          </div>
        </div>
      </Html>
    </group>
  );
}

function App() {
  const floatingSkills = useMemo(
    () => [
      { text: 'ReactJS', position: [-2.4, 0.6, -0.3], speed: 0.8 },
      { text: 'Kafka', position: [2.3, 0.4, -0.25], speed: 1.1 },
      { text: 'PostgreSQL', position: [0, -0.9, -0.7], speed: 1.3 },
      { text: 'Three.js', position: [-1.7, -0.6, 1.0], speed: 0.9 },
      { text: 'Spring Boot', position: [1.8, -0.4, 1.1], speed: 1.05 },
    ],
    []
  );

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
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Systems Engineer</p>
            <h1>Nayan Shingare</h1>
            <p className="hero-description">
              Mumbai-based engineer building dependable banking systems and expressive front-end experiences with React, Spring Boot, and modern APIs.
            </p>
            <div className="hero-meta">
              <span>Mumbai, Maharashtra</span>
              <span>Java · React · Three.js</span>
            </div>
          </div>

          <div className="canvas-stage">
            <Canvas shadows camera={{ position: [0, 0, 7], fov: 35 }}>
              <ambientLight intensity={0.35} />
              <directionalLight position={[5, 5, 5]} intensity={1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
              <pointLight position={[-4, 2, -3]} intensity={0.7} />
              <RotatingCard />
              {floatingSkills.map((skill) => (
                <FloatingSkill key={skill.text} text={skill.text} position={skill.position} speed={skill.speed} />
              ))}
              <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.8} />
            </Canvas>
          </div>
        </section>

        <section className="section-card" id="about">
          <h2>About</h2>
          <p>
            I build stable, maintainable systems for real-world banking workflows and translate technical requirements into practical products.
            My work is meant to feel approachable and useful, not over-designed. I care about how people interact with the result.
          </p>
        </section>

        <section className="section-card" id="experience">
          <h3>Experience</h3>
          <p>Tata Consultancy Services — Systems Engineer (Oct 2023 – Present)</p>
          <ul>
            <li>Engineered core banking modules using Java and Spring Boot.</li>
            <li>Built scalable REST APIs with low-latency responses under 200 ms.</li>
            <li>Created a transaction reversal scheduler using multithreading, PostgreSQL, and Kafka.</li>
            <li>Optimized queries and caching to reduce execution time by 30%+.</li>
          </ul>
        </section>

        <section className="section-card" id="projects">
          <h3>Projects</h3>

          <div className="project-card">
            <div className="project-card-header">
              <div>
                <h4>User Authentication & Authorization System</h4>
                <p className="project-eyebrow">Java 17 · Spring Boot · ReactJS · MySQL · JWT</p>
              </div>
              <span className="project-pill">Security</span>
            </div>
            <p className="project-summary">
              Built a resilient authentication experience that protects sessions, enforces role-based access, and keeps the frontend and backend in sync with secure session state.
            </p>
            <ul className="project-details">
              <li>Implemented JWT authentication with HttpOnly cookies and CSRF protection for safe, seamless user sessions.</li>
              <li>Built backend role enforcement with Spring Security and frontend protected routes for access control.</li>
              <li>Created a <code>/user/me</code> endpoint and Redux-based state persistence to preserve secure session context across refreshes.</li>
            </ul>
          </div>

          <div className="project-card">
            <div className="project-card-header">
              <div>
                <h4>Online Movie Ticket Booking System</h4>
                <p className="project-eyebrow">Java 17 · Spring Boot · ReactJS · MySQL · JWT</p>
              </div>
              <span className="project-pill">Bookings</span>
            </div>
            <p className="project-summary">
              Delivered a ticket booking platform with secure support workflows and operational dashboards for monitoring ticket lifecycle and priority service.
            </p>
            <ul className="project-details">
              <li>Built a role-based support ticket system with secure authentication and segregated admin controls.</li>
              <li>Designed ticket categorization, priority handling, commenting, and dashboard metrics for efficient issue tracking.</li>
            </ul>
          </div>
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

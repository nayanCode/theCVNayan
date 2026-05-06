import React from 'react';

export default function Skills({ skills }) {
  return (
    <section className="section-card" id="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

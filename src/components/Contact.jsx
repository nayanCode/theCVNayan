import React from 'react';

export default function Contact({ socials, copyEmail, copied }) {
  return (
    <section className="section-card" id="contact">
      <h2>Contact</h2>
      <div className="social-links">
        {socials.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
        <button className="btn copy-email" onClick={copyEmail} aria-live="polite">
          {copied ? 'Copied' : 'Copy Email'}
        </button>
      </div>
    </section>
  );
}

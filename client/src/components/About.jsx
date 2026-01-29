import '../styles/About.css';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className="about-page">
        <Navbar />
        <div className="about-container">
            <h1 className="about-title">The World Journal Project</h1>
            <p className="about-subtitle">Daily updates. Real people. Around the world.</p>
            <p className="about-text">I've always been fascinated with the way our lives differ from one another despite experiencing the very same day. Today, someone might be receiving their dream college acceptance letter, while another is scrambling around at work just trying to get through another hard day. Somewhere else, someone may be starting a new chapter, saying goodbye to a loved one, celebrating a milestone, or simply finding small moments of peace in the ordinary.</p>
            <p className="about-text">This project aims to capture these different experiences and share them with the world. Feel free to submit your own stories to add to our collection. I hope in exploring this site, you'll find comfort in the diversity of human experience, and a reminder that no matter where you are in life, you're not alone.</p>
        </div>
        <Footer />
    </div>
  );
}

export default About;
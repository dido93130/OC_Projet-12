// Header.jsx

import React, { useEffect, useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  // Function to detect which section is currently visible
  const detectVisibleSection = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition <= top + height) {
        setActiveLink(id);
      }
    });
  };

  // Effect to listen for scroll events and update active link
  useEffect(() => {
    window.addEventListener('scroll', detectVisibleSection);
    return () => window.removeEventListener('scroll', detectVisibleSection);
  }, []);

  return (
    <header>
      <nav id="myNavbar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about">Moi</a>
              <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="/OC_Projet-12/#skills">Compétence</a>
              <a className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} href="/OC_Projet-12/#experience">Expérience</a>
              <a className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} href="/OC_Projet-12/#education">Education</a>
              <a className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`} href="/OC_Projet-12/#portfolio">Portfolio</a>
              <a className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} href="/OC_Projet-12/#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
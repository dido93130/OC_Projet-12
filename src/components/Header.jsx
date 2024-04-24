// Header.jsx

import React from 'react';

const Header = () => {
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
                <a className="nav-link active" aria-current="page"  href="#about">Moi</a>
                <a className="nav-link" href="#skills">Compétence</a>
                <a className="nav-link" href="#experience">Expérience</a>
                <a className="nav-link" href="#education">Education</a>
                <a className="nav-link" href="#portfolio">Portfolio</a>      
                <a className="nav-link" href="#contact">Contact</a>
             </div>
          </div>
       </div>
      </nav>
    </header>
  );
};

export default Header;
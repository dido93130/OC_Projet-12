// AboutMe.jsx
import Social from './SocialBar'
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">        
          <img src="images/moi4.webp" alt="Photo de Eddy capirchio" className="about-container-image" />
        </div>         
        <div className="heading second-color">
          <h1 className='title about-title'>Bonjour, c'est moi Eddy</h1>
          <h3 className='title about-subtitle'>Développeur Web</h3>          
          <a href="doc/CV_EDDY.pdf" className="button1">Télécharger CV</a> 
          <Social />        
        </div> 
       
    </section>
  );
};

export default About;
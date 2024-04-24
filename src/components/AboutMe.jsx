// AboutMe.jsx

import React from 'react';

const About = () => {
  return (
    <section id="about" className="container-fluid">
      <div className="col-8 col-lg-4 profile-picture">        
          <img src="images/moi4.webp" alt="Eddy" className="rounded-circle" />
        </div>         
        <div className="heading">
          <h1 className='title'>Hello, c'est moi Eddy</h1>
          <h3 className='title'>Développeur Web</h3>
          <a href="doc/CV_EDDY.pdf" className="button1">Télécharger CV</a>
        </div>     
    </section>
  );
};

export default About;
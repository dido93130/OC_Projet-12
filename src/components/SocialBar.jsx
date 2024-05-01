import React from 'react';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="lien_profil_facebook" target="_blank" className="social-icon">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="lien_profil_twitter" target="_blank" className="social-icon">
        <i className="bi bi-twitter-x"></i>
      </a>
      <a href="https://www.linkedin.com/in/eddy-capirchio-76187b250/" target="_blank" className="social-icon">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/dido93130" target="_blank" className="social-icon">
        <i className="bi bi-github"></i>
      </a>     
    </div>
  );
};

export default SocialBar;
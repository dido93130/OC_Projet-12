// Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <section id='skills'>
      <div className="divider"></div>
      <div className="heading">
        <h2 className='title'>Compétences</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">HTML 85%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">CSS 85%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">JAVASCRIPT 90%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">REACT 90%</h5></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">JQUERY 85%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">BOOTSTRAP 80%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">PHP 75%</h5></div>
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"><h5 className="skill-label">SCSS 90%</h5></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

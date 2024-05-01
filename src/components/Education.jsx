// Education.jsx

import React from 'react';

const Education = () => {
  return (
    <section id='education' className='education'>
      <div className="container">
        <div className="divider"></div>
        <div className="heading">
          <h2 className='title first-color education-title'>Education</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="education-block">
              <h5 className='title education-block-frtitle'>2023-2024</h5>
              <span className="bi-award-fill education-block-badge"></span>
              <h3 className='title education-block-setitle'>OpenClassroom</h3>
              <h4 className='title education-block-thtitle'>Formation Intégrateur Web</h4>
              <div className="divider"></div>
              <p>HTML/CSS, SCSS, Javascript, REACT</p>
              <p>Responsive and UX Design</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="education-block">
              <h5 className='title education-block-frtitle'>2022</h5>
              <span className="bi-award-fill education-block-badge"></span>
              <h3 className='title education-block-setitle'>Udemi</h3>
              <h4 className='title education-block-thtitle'>Formation Développeur Web</h4>
              <div className="divider"></div>
              <p>HTML/CSS, Javascript, JQuery, PHP, SQL</p>
              <p>Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

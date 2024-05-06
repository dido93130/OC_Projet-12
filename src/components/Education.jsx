// Education.jsx

import React from 'react';
import educationData from '../data/educationData.json';

const Education = () => {
  return (
    <section id='education' className='education'>
      <div className="container">
        <div className="divider"></div>
        <div className="heading">
          <h2 className='title first-color education-title'>Education</h2>
        </div>
        <div className="row">
          {educationData.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="education-block">
                <h3 className='title education-block-frtitle'>{item.date}</h3>
                <span className="bi-award-fill education-block-badge"></span>
                <h4 className='title education-block-setitle'>{item.school}</h4>
                <h5 className='title education-block-thtitle'>{item.course}</h5>
                <div className="divider"></div>
                <p>{item.topics.join(', ')}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

// Experience.jsx

import React from 'react';

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className='title'>Expérience Professionnelle</h2>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-badge"><span className="bi bi-briefcase-fill"></span></div>
            <div className="timeline-panel-container">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className='title'>Développeur Web</h3>
                  <h4 className='title'>Développeur Web junior</h4>
                  <p className="text-muted"><span className="bi bi-clock-fill"></span> 2020-2022</p>
                </div>
                <div className="timeline-body">
                  <p>Création de site web statique, dynamique et responsive adapté au mobile</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge"><span className="bi bi-briefcase-fill"></span></div>
            <div className="timeline-panel-container-inverted">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className='title'>Auto-entrepreneur dans la maintenance informatique</h3>
                  <h4 className='title'>Développeur Web</h4>
                  <p className="text-muted"><span className="bi bi-clock-fill"></span> 2009-2011</p>
                </div>
                <div className="timeline-body">
                  <p>Entretien et mise en service d'un parc informatique</p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge"><span className="bi bi-briefcase-fill"></span></div>
            <div className="timeline-panel-container">
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3 className='title'>Electricien</h3>
                  <h4 className='title'>Electricien de maintenance</h4>
                  <p className="text-muted"><span className="bi bi-clock-fill"></span> 2007-2009</p>
                </div>
                <div className="timeline-body">
                  <p>Réalisation, maintenance, modification d'installations électriques</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;

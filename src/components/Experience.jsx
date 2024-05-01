// Experience.jsx

import React from 'react';
import TimelineItem from './TimelineItem';

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className='title second-color'>Expérience Professionnelle</h2>
        </div>        
        <ul className="timeline">
          <TimelineItem
            title="Intégrateur Web"
            subtitle="Intégrateur Web"
            duration="2023-2024"
            description="Formation Intégrateur web OpenClassroom"
          />
          <TimelineItem
            title="Développeur Web"
            subtitle="Développeur Web junior"
            duration="2020-2022"
            description="Création de site web responsive adapté au mobile"
            inverted
          />
          <TimelineItem
            title="Auto-entrepreneur dans la maintenance informatique"
            subtitle="Technicien informatique"
            duration="2009-2011"
            description="Entretien et mise en service d'un parc informatique"
          />
          <TimelineItem
            title="Electricien"
            subtitle="Electricien de maintenance"
            duration="2007-2009"
            description="Réalisation, maintenance, modification d'installations électriques"
            inverted
          />
        </ul>
      </div>
    </section>
  );
};



export default Experience;
// Skills.jsx

import React from 'react';
import SkillProgressBar from './SkillProgressBar';
import skillsData from '../data/skillsData.json'; // Importez les données JSON

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <div className="divider"></div>
      <div className="heading">
        <h2 className='title first-color'>Compétences</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {skillsData.slice(0, 5).map((skill, index) => (
              <SkillProgressBar
                key={index}
                label={skill.label}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <div className="col-lg-6">
            {skillsData.slice(5).map((skill, index) => (
              <SkillProgressBar
                key={index}
                label={skill.label}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

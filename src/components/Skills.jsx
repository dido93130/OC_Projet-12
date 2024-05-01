// Skills.jsx

import React from 'react';
import SkillProgressBar from './SkillProgressBar';

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
            <SkillProgressBar label="HTML" percentage={95} />
            <SkillProgressBar label="CSS" percentage={95} />
            <SkillProgressBar label="JavaScript" percentage={90} />
            <SkillProgressBar label="React" percentage={90} />
            <SkillProgressBar label="Figma" percentage={90} />
          </div>
          <div className="col-lg-6">
            <SkillProgressBar label="jQuery" percentage={85} />
            <SkillProgressBar label="Bootstrap" percentage={80} />
            <SkillProgressBar label="PHP" percentage={75} />
            <SkillProgressBar label="SCSS" percentage={90} />
            <SkillProgressBar label="Git/GitHub" percentage={92} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

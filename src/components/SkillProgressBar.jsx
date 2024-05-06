import React from 'react';

const SkillProgressBar = ({ label, percentage }) => {
    return (
      <div className="progress skills-progress">
        <div className="progress-bar skills-progress-bar" role="progressbar" aria-label="Skill progross" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
          <h3 className="skills-progress-bar-label">{label} {percentage}%</h3>
        </div>
      </div>
    );
  };

  export default SkillProgressBar;
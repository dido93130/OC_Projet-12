import React from 'react';

const SkillProgressBar = ({ label, percentage }) => {
    return (
      <div className="progress skills-progress">
        <div className="progress-bar skills-progress-bar" role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
          <h5 className="skills-progress-bar-label">{label} {percentage}%</h5>
        </div>
      </div>
    );
  };

  export default SkillProgressBar;
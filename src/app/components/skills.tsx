import React from 'react';
import './skills.css';

type SkillsProps = {
  theme: 'light' | 'dark' | 'gray';
};

const Skills: React.FC<SkillsProps> = ({ theme }) => {
  const skills = {
    JavaScript: 'Advanced',
    React: 'Intermediate',
    NodeJS: 'Intermediate',
    HTML: 'Advanced',
    CSS: 'Advanced',
  };

  return (
    <div className={`skills-container ${theme}`}>
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {Object.entries(skills).map(([skill, level]) => (
          <li key={skill} className="skills-list-item">
            <span className="skills-label">{skill}:</span>
            <span className="skills-level">{level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

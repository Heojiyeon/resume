import React from 'react';
import SkillContent from './SkillContent';
import { skills } from '../../utils/skillData';

export default function Skill() {
  return (
    <div>
      <h1>Skills</h1>
      {skills.map(skill => (
        <>
          <h2>{skill.title}</h2>
          <SkillContent contents={skill.contents} />
        </>
      ))}
    </div>
  );
}

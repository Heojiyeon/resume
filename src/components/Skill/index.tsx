import React from 'react';
import { FONT_HIGHLIGHT } from '../../utils/constants';
import { skills } from '../../utils/skillData';
import SkillContent from './SkillContent';

export default function Skill() {
  return (
    <div>
      <h1 style={{ color: FONT_HIGHLIGHT, marginTop: 0 }}>Skills.</h1>
      {skills.map(skill => (
        <div style={{ marginBottom: '3rem' }}>
          <h2>{skill.title}</h2>
          <SkillContent contents={skill.contents} />
        </div>
      ))}
    </div>
  );
}

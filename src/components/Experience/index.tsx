import React from 'react';
import ExperienceHeader from './ExperienceHeader';
import ExperienceContent from './ExperienceContent';
import { experiences } from '../../utils/experienceData';

export default function Experience() {
  return (
    <div>
      <h1>Other experiences</h1>
      {experiences.map(experience => (
        <div key={experience._id}>
          <ExperienceHeader header={experience.header} />
          <ExperienceContent content={experience.content} />
        </div>
      ))}
    </div>
  );
}

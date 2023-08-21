import React from 'react';
import ExperienceHeader from './ExperienceHeader';
import ExperienceContent from './ExperienceContent';
import { experiences } from '../../utils/experienceData';
import { FONT_HIGHLIGHT } from '../../utils/constants';
import styled from '@emotion/styled';

export default function Experience() {
  return (
    <ExperienceContainer>
      <h1 style={{ color: FONT_HIGHLIGHT }}>Other experiences.</h1>
      {experiences.map(experience => (
        <div key={experience._id} style={{ marginBottom: '4rem' }}>
          <ExperienceHeader header={experience.header} />
          <ExperienceContent content={experience.content} />
        </div>
      ))}
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled('div')`
  margin-bottom: 1rem;
`;

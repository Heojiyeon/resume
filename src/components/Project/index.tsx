import React from 'react';
import ProjectContent from './ProjectContent';
import ProjectHeader from './ProjectHeader';
import { projects } from '../../utils/projectData';
import styled from '@emotion/styled';
import { FONT_HIGHLIGHT } from '../../utils/constants';

export default function Project() {
  return (
    <>
      <h1 style={{ color: FONT_HIGHLIGHT }}>Projects.</h1>
      {projects.map(project => (
        <ProjectContentContainer key={project._id}>
          <ProjectHeader header={project.header} />
          <ProjectContent content={project.content} />
        </ProjectContentContainer>
      ))}
    </>
  );
}

const ProjectContentContainer = styled('div')`
  margin-bottom: 1rem;
`;

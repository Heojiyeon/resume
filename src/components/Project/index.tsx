import React from 'react';
import ProjectContent from './ProjectContent';
import ProjectHeader from './ProjectHeader';
import { projects } from '../../utils/projectData';
import styled from '@emotion/styled';

export default function Project() {
  return (
    <ProjectContentContainer>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project._id}>
          <ProjectHeader header={project.header} />
          <ProjectContent content={project.content} />
        </div>
      ))}
    </ProjectContentContainer>
  );
}

const ProjectContentContainer = styled('div')`
  margin: 1rem;
`;

import styled from '@emotion/styled';
import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Project from '../components/Project';
import Skill from '../components/Skill';
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <IndexPageContainer>
      <Header />
      <Project />
      <Experience />
      <Skill />
    </IndexPageContainer>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume | zena</title>;

const IndexPageContainer = styled('div')`
  width: 48rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import React from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Link from '../components/Link';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
      <Project />
      <Experience />
      <Skill />
      <Link />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume | zena</title>;

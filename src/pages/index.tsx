import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Content from '../components/content';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout children={<Content />} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

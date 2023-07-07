import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import React, { useContext, useState } from 'react';
import Content from '../components/content';
import DarkModeButton from '../components/darkmodeButton';
import Layout from '../components/layout';
import { ThemeContext } from '../store/context';

const IndexPage: React.FC<PageProps> = () => {
  const theme = useContext(ThemeContext);

  const [currTheme, setTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={currTheme}>
      <DarkModeButton setTheme={setTheme} />
      <Layout children={<Content />} />
    </ThemeContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume|zena</title>;

import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import React, { useContext, useState } from 'react';
import Content from '../components/Main/Content';
import DarkModeButton from '../components/Main/DarkmodeButton';
import Layout from '../components/Main/Layout';
import { ThemeContext } from '../context/ThemeContext';

const IndexPage: React.FC<PageProps> = () => {
  const isDark = useContext(ThemeContext);

  const [currTheme, setTheme] = useState(isDark);

  return (
    <ThemeContext.Provider value={currTheme}>
      <DarkModeButton setTheme={setTheme} />
      <Layout children={<Content />} />
    </ThemeContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume|zena</title>;

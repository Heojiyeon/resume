import '@fontsource/gothic-a1';
import type { HeadFC, PageProps } from 'gatsby';
import React, { useContext, useState } from 'react';
import Content from '../components/Main/MainContent';
import DarkModeButton from '../components/common/DarkmodeButton';
import Main from '../components/Main';
import { ThemeContext } from '../store/ThemeContext';

const IndexPage: React.FC<PageProps> = () => {
  const isDark = useContext(ThemeContext);

  const [currTheme, setTheme] = useState(isDark);

  return (
    <ThemeContext.Provider value={currTheme}>
      <DarkModeButton setTheme={setTheme} />
      <Main children={<Content />} />
    </ThemeContext.Provider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Resume | zena</title>;

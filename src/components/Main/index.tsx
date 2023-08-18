import styled from '@emotion/styled';
import '@fontsource/gothic-a1';
import React, { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import {
  BACKGROUND_DARK,
  BACKGROUND_LIGHT,
  FONT_DARK,
  FONT_LIGHT,
} from '../../utils/constants';

const GlobalWrapper = styled('div')`
  font-family: 'Gothic A1, sans-serif';
  height: 100vh;
  width: 100%;
`;

type LayoutProps = {
  children: React.ReactElement;
};

export default function Main({ children }: LayoutProps) {
  const theme = useContext(ThemeContext);

  return (
    <GlobalWrapper
      style={
        theme
          ? {
              backgroundColor: BACKGROUND_DARK,
              color: FONT_LIGHT,
              transition: 'all 0.4s ease-in',
            }
          : {
              backgroundColor: BACKGROUND_LIGHT,
              color: FONT_DARK,
              transition: 'all 0.4s ease-in',
            }
      }
    >
      {children}
    </GlobalWrapper>
  );
}

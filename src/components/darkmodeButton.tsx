import styled from '@emotion/styled';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../store/context';

const ButtonBackground = styled.div`
  width: 80px;
  height: 40px;
  opacity: 0.8;
  border-radius: 30px;
`;

const ButtonToggle = styled.div`
  width: 40px;
  height: 40px;
  z-index: 999;
  border-radius: 50%;
`;

type DarkModeButtonProps = {
  setTheme: (currTheme: string) => void;
};

export default function DarkModeButton({ setTheme }: DarkModeButtonProps) {
  const theme = useContext(ThemeContext);

  const handleModeButton = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [theme]);

  return (
    <ButtonBackground
      style={
        theme === 'light'
          ? { backgroundColor: 'gray' }
          : { backgroundColor: 'black' }
      }
    >
      <ButtonToggle
        onClick={handleModeButton}
        style={
          theme === 'light'
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'white' }
        }
      ></ButtonToggle>
    </ButtonBackground>
  );
}

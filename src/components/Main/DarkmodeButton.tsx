import styled from '@emotion/styled';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

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
  setTheme: (currTheme: boolean) => void;
};

export default function DarkModeButton({ setTheme }: DarkModeButtonProps) {
  const theme = useContext(ThemeContext);

  const handleModeButton = useCallback(() => {
    !theme ? setTheme(true) : setTheme(false);
  }, [theme]);

  return (
    <ButtonBackground
      style={
        !theme ? { backgroundColor: 'gray' } : { backgroundColor: 'black' }
      }
    >
      <ButtonToggle
        onClick={handleModeButton}
        style={
          !theme
            ? {
                backgroundColor: 'black',
                transform: 'translate(0%)',
                transition: 'all 0.4s ease-in',
              }
            : {
                backgroundColor: 'white',
                transform: 'translate(100%)',
                transition: 'all 0.4s ease-in',
              }
        }
      ></ButtonToggle>
    </ButtonBackground>
  );
}

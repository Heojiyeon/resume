import { createContext } from 'react';

const isDark = false;

const ThemeContext = createContext(isDark);

export { ThemeContext };

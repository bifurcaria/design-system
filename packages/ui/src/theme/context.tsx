import React, { createContext, useContext, type ReactNode } from 'react';
import { type Theme } from './types';
import { lightTheme } from './tokens';

const ThemeContext = createContext<Theme>(lightTheme);

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  theme = lightTheme, 
  children 
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

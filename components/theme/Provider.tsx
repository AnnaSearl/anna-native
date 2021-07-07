import * as React from 'react';
import { useState } from 'react';
import ThemeContext from './context';
import DefaultTheme from './DefaultTheme';

export interface ThemeProviderProps {
  theme?: AnnaNative.Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { theme, children } = props;

  const [themeState, setThemeState] = useState<AnnaNative.Theme>(theme || DefaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        setTheme: setThemeState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

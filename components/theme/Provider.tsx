import React, { Dispatch, SetStateAction } from 'react';
import ThemeContext from './context';

export interface ThemeProviderProps {
  theme?: AnnaNative.Theme;
  setTheme?: Dispatch<SetStateAction<AnnaNative.Theme>>;
}

const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { theme, setTheme, children } = props;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

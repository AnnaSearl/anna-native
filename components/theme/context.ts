import React, { Dispatch, SetStateAction } from 'react';

export interface ThemeContextProps {
  theme?: AnnaNative.Theme;
  setTheme?: Dispatch<SetStateAction<AnnaNative.Theme>>;
}

const ThemeContext = React.createContext<ThemeContextProps>({});

export default ThemeContext;

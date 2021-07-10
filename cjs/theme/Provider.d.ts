import React, { Dispatch, SetStateAction } from 'react';
export interface ThemeProviderProps {
    theme?: AnnaNative.Theme;
    setTheme?: Dispatch<SetStateAction<AnnaNative.Theme>>;
}
declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;

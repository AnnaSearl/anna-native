import React, { Dispatch, SetStateAction } from 'react';
export interface ThemeContextProps {
    theme?: AnnaNative.Theme;
    setTheme?: Dispatch<SetStateAction<AnnaNative.Theme>>;
}
declare const ThemeContext: React.Context<ThemeContextProps>;
export default ThemeContext;

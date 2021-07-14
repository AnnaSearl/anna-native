import React from 'react';
import ThemeContext from './context';
import DefaultTheme from './DefaultTheme';

export interface AnyObject {
  [restProps: string]: any;
}

export interface ThemeProps {
  theme: AnnaNative.Theme;
}

type WithThemeComponentType<T> = React.FC<T> & { [restProps: string]: any };

function withTheme<T extends ThemeProps>(
  Component: React.ComponentType<T>,
): WithThemeComponentType<Omit<T, keyof ThemeProps>> {
  const withThemeComponent: React.FC<Omit<T, keyof ThemeProps>> = props => {
    return (
      <ThemeContext.Consumer>
        {context => (
          <Component
            {...(props as T)} // 必须强转
            theme={context.theme || DefaultTheme}
            setTheme={context.setTheme}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
  return withThemeComponent;
}

export default withTheme;

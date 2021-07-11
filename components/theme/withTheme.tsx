import * as React from 'react';
import ThemeContext from './context';
import DefaultTheme from './DefaultTheme';

export interface AnyObject {
  [restProps: string]: any;
}

export type ComponentType<T> = T & {
  theme: AnnaNative.Theme;
};

type WithThemeComponentType<T> = React.FC<T> & { [restProps: string]: any };

function withTheme<T>(Component: React.ComponentType<ComponentType<T>>): WithThemeComponentType<T> {
  const withThemeComponent: React.FC<T> = props => {
    return (
      <ThemeContext.Consumer>
        {context => (
          <Component {...props} theme={context.theme || DefaultTheme} setTheme={context.setTheme} />
        )}
      </ThemeContext.Consumer>
    );
  };
  return withThemeComponent;
}

export default withTheme;

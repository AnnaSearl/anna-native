import * as React from 'react';
import ThemeContext from './context';

export interface ComponentProps {
  theme: AnnaNative.Theme;
  [restProps: string]: any;
}

const withTheme = (Component: React.ComponentType<ComponentProps>) => {
  return function (props: any) {
    return (
      <ThemeContext.Consumer>
        {context => <Component {...props} theme={context.theme} setTheme={context.setTheme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;

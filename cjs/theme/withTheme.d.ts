import * as React from 'react';
export interface ComponentProps {
    theme: AnnaNative.Theme;
    [restProps: string]: any;
}
declare const withTheme: (Component: React.ComponentType<ComponentProps>) => (props: any) => JSX.Element;
export default withTheme;

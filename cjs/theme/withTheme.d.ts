import * as React from 'react';
export interface AnyObject {
    [restProps: string]: any;
}
export declare type ComponentType<T> = T & {
    theme: AnnaNative.Theme;
};
declare type WithThemeComponentType<T> = React.FC<T> & {
    [restProps: string]: any;
};
declare function withTheme<T>(Component: React.ComponentType<ComponentType<T>>): WithThemeComponentType<T>;
export default withTheme;

import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface TabTitleProps {
    key?: string | number;
    tab?: React.ReactNode;
}
export interface TabsProps {
    activeKey?: string | number;
    titleWidth?: number;
    titleSquare?: boolean;
    titleFlexible?: boolean;
    titleCursorWidth?: number;
    titleStyle?: TextStyle;
    titleActiveStyle?: TextStyle;
    tabBarStyle?: ViewStyle;
    hideCursor?: boolean;
    theme: AnnaNative.Theme;
    renderTab?: (item?: TabTitleProps, index?: number, isActive?: boolean) => React.ReactElement;
    renderTitleCursor?: () => React.ReactElement;
    onTabClick?: (i: any) => void;
}
export interface TabContentProps {
    key?: string | number;
    tab?: React.ReactNode;
    active?: boolean;
    style?: ViewStyle;
    animated?: boolean;
    theme: AnnaNative.Theme;
}
declare const TabsWithTheme: React.FC<TabsProps> & {
    [restProps: string]: any;
};
export default TabsWithTheme;

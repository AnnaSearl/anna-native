import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface TabTitleProps {
    key?: string | number;
    tab?: React.ReactNode;
}
export interface TabProps {
    activeKey?: string | number;
    children?: React.ReactNode;
    titleWidth?: number;
    titleSquare?: boolean;
    titleFlexible?: boolean;
    titleCursorWidth?: number;
    titleStyle?: TextStyle;
    titleActiveStyle?: TextStyle;
    tabBarStyle?: ViewStyle;
    hideCursor?: boolean;
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
    children?: React.ReactNode;
}
declare const Tabs: {
    (props: TabProps): React.ReactElement;
    TabContent: React.FC<TabContentProps>;
};
export default Tabs;

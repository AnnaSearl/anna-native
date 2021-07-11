import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface TagProps {
    look?: 'primary' | 'blue' | 'green' | 'yellow' | 'red' | 'dark' | 'gray';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    plain?: boolean;
    color?: string;
    disabled?: boolean;
    style?: ViewStyle | ViewStyle[] | TextStyle | TextStyle[];
    theme: AnnaNative.Theme;
    onPress?: (e: any) => void;
}
export interface CheckableTagProps extends TagProps {
    checked?: boolean;
    style?: ViewStyle;
    onChange?: (checked: boolean) => void;
}
declare const TagWithTheme: React.FC<TagProps> & {
    [restProps: string]: any;
};
export default TagWithTheme;

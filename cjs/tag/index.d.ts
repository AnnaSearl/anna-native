import { ViewStyle, TextStyle } from 'react-native';
export interface TagProps {
    look?: 'blue' | 'green' | 'yellow' | 'red' | 'dark' | 'gray';
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
declare const _default: (props: any) => JSX.Element;
export default _default;

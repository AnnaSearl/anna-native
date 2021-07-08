import { ViewStyle, TextStyle } from 'react-native';
export interface ButtonProps {
    type?: 'primary';
    shape?: 'square' | 'circle';
    plain?: boolean;
    disabled?: boolean;
    look?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    width?: number;
    style?: ViewStyle;
    textStyle?: TextStyle;
    theme: AnnaNative.Theme;
    onPress?: () => void;
}
declare const _default: (props: any) => JSX.Element;
export default _default;

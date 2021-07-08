import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface CardProps {
    title?: React.ReactNode;
    titleNumberOfLines?: number;
    titleSize?: 'small' | 'medium' | 'large';
    headerBorder?: boolean;
    description?: React.ReactNode;
    extra?: React.ReactNode;
    style?: ViewStyle;
    contentStyle?: React.CSSProperties;
    children?: React.ReactNode;
    onPress?: (e: any) => void;
}
declare const Card: (props: CardProps) => JSX.Element;
export default Card;

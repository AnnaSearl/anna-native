import * as React from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import IconFont from '../assets/iconfont';

export interface IconProps {
  name: string;
  size?: number;
  color?: string | string[];
  style?: ViewStyle;
}

const Icon: React.FC<IconProps> & {
  PressableIcon?: (p: any) => React.ReactElement | null;
} = props => {
  const { name, size, color, style } = props;
  return (
    <View style={style}>
      {/* @ts-ignore */}
      <IconFont name={name} size={size} color={color} />
    </View>
  );
};
export interface PressableIconProps extends IconProps {
  style: ViewStyle;
  onPress?: (e: any) => void;
}

const PressableIcon: React.FC<PressableIconProps> = props => {
  const { name, size, color, style, onPress } = props;
  return (
    <Pressable onPress={onPress}>
      <Icon style={style} name={name} size={size} color={color} />
    </Pressable>
  );
};

Icon.PressableIcon = PressableIcon;

export default Icon;

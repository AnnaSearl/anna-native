import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { isIPhoneX } from '../_util';
import { TOP_SAFE_HEIGHT, BOTTOM_SAFE_HEIGHT } from '../_constants';

export interface SafeFillingProps {
  bottom?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
}

const SafeFilling: React.FC<SafeFillingProps> = props => {
  const { bottom, backgroundColor, style } = props;
  const safeFillStyle = {
    height: bottom ? BOTTOM_SAFE_HEIGHT : TOP_SAFE_HEIGHT,
    backgroundColor: backgroundColor,
  };
  return isIPhoneX() ? <View style={[safeFillStyle, style]} /> : null;
};

export default SafeFilling;

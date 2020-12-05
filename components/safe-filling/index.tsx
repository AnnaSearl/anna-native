import * as React from 'react';
// @ts-ignore
import { View, DeviceInfo, ViewStyle } from 'react-native';

export interface SafeFillingProps {
  bottom?: boolean;
  backgroundColor?: string;
  style?: ViewStyle;
}

const SafeFilling: React.FC<SafeFillingProps> = props => {
  const { bottom, backgroundColor, style } = props;
  const safeFillStyle = { height: bottom ? 34 : 44, backgroundColor: backgroundColor };
  return DeviceInfo.isIPhoneX_deprecated ? <View style={[safeFillStyle, style]} /> : null;
};

export default SafeFilling;

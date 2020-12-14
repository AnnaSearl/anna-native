/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconlineScreen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M937.248 199.424a64 64 0 0 1-18.752 45.248l-303.872 303.84v285.28a64 64 0 0 1-64 64h-64a64 64 0 0 1-64-64v-307.904L141.408 244.672a64 64 0 0 1 45.248-109.248h686.592a64 64 0 0 1 64 64z m-64 0H186.656l299.968 299.936v334.432h64v-311.776L873.28 199.456z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineScreen.defaultProps = {
  size: 18,
};

IconlineScreen = React.memo ? React.memo(IconlineScreen) : IconlineScreen;

export default IconlineScreen;

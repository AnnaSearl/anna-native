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

let IconlineAddress: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c212.064 0 384 171.936 384 384s-255.232 448-384 448S128 692.064 128 480 299.936 96 512 96z m0 64C335.264 160 192 303.264 192 480c0 159.072 210.24 384 320 384 109.76 0 320-224.928 320-384 0-176.736-143.264-320-320-320z m0 160a160 160 0 1 1 0 320 160 160 0 0 1 0-320z m0 64a96 96 0 1 0 0 192 96 96 0 0 0 0-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineAddress.defaultProps = {
  size: 18,
};

IconlineAddress = React.memo ? React.memo(IconlineAddress) : IconlineAddress;

export default IconlineAddress;

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

let IconlineError: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m-90.496 216.224L512 466.752l90.496-90.528a32 32 0 0 1 45.28 45.28L557.248 512l90.528 90.496a32 32 0 0 1-45.28 45.28L512 557.248l-90.496 90.528a32 32 0 0 1-45.28-45.28L466.752 512l-90.528-90.496a32 32 0 0 1 45.28-45.28z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineError.defaultProps = {
  size: 18,
};

IconlineError = React.memo ? React.memo(IconlineError) : IconlineError;

export default IconlineError;

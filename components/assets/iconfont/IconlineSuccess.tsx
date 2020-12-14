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

let IconlineSuccess: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c229.76 0 416 186.24 416 416s-186.24 416-416 416S96 741.76 96 512 282.24 96 512 96z m0 64C317.6 160 160 317.6 160 512s157.6 352 352 352 352-157.6 352-352S706.4 160 512 160z m181.024 220.128a32 32 0 0 1 0 45.248l-203.648 203.648a31.84 31.84 0 0 1-16.96 8.864l-3.776 0.448h-3.776a31.872 31.872 0 0 1-20.736-9.312l-113.152-113.152a32 32 0 1 1 45.248-45.248l90.496 90.496 181.056-180.992a32 32 0 0 1 45.248 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineSuccess.defaultProps = {
  size: 18,
};

IconlineSuccess = React.memo ? React.memo(IconlineSuccess) : IconlineSuccess;

export default IconlineSuccess;

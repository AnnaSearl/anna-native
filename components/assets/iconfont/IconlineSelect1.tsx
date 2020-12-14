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

let IconlineSelect1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M102.304 452.224a48 48 0 0 1 67.872 0l214.912 214.944L833.472 218.88a48 48 0 0 1 67.872 67.872L426.176 761.92a48.544 48.544 0 0 1-3.712 3.328 48 48 0 0 1-71.264 3.744l-248.896-248.896a48 48 0 0 1 0-67.872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineSelect1.defaultProps = {
  size: 18,
};

IconlineSelect1 = React.memo ? React.memo(IconlineSelect1) : IconlineSelect1;

export default IconlineSelect1;

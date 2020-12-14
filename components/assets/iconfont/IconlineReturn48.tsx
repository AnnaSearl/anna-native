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

let IconlineReturn48: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M548.416 74.538667a42.666667 42.666667 0 0 1 0 60.330666L171.306667 512l377.109333 377.152a42.666667 42.666667 0 1 1-60.330667 60.330667L81.173333 542.549333a42.666667 42.666667 0 0 1-0.384-60.714666L488.085333 74.538667a42.666667 42.666667 0 0 1 60.330667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineReturn48.defaultProps = {
  size: 18,
};

IconlineReturn48 = React.memo ? React.memo(IconlineReturn48) : IconlineReturn48;

export default IconlineReturn48;

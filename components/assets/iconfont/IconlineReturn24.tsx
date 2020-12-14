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

let IconlineReturn24: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M921.898667 481.834667a42.666667 42.666667 0 0 1 0 60.330666L529.664 934.4A42.666667 42.666667 0 0 1 469.333333 874.026667L831.36 512 469.333333 149.973333A42.666667 42.666667 0 1 1 529.664 89.6l392.234667 392.192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineReturn24.defaultProps = {
  size: 18,
};

IconlineReturn24 = React.memo ? React.memo(IconlineReturn24) : IconlineReturn24;

export default IconlineReturn24;

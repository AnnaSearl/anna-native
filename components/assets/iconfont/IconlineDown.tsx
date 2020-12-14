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

let IconlineDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M542.165333 751.232a42.666667 42.666667 0 0 1-60.330666 0L89.6 358.997333A42.666667 42.666667 0 0 1 149.973333 298.666667L512 660.693333 874.026667 298.666667A42.666667 42.666667 0 0 1 934.4 358.997333l-392.192 392.234667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineDown.defaultProps = {
  size: 18,
};

IconlineDown = React.memo ? React.memo(IconlineDown) : IconlineDown;

export default IconlineDown;

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

let IconlineReturnCenter24: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M751.232 481.834667a42.666667 42.666667 0 0 1 0 60.330666L358.997333 934.4A42.666667 42.666667 0 0 1 298.666667 874.026667L660.693333 512 298.666667 149.973333A42.666667 42.666667 0 0 1 358.997333 89.6l392.234667 392.192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineReturnCenter24.defaultProps = {
  size: 18,
};

IconlineReturnCenter24 = React.memo ? React.memo(IconlineReturnCenter24) : IconlineReturnCenter24;

export default IconlineReturnCenter24;

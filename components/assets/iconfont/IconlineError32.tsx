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

let IconlineError32: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M144 133.28a32 32 0 0 1 45.248 0L511.36 455.424 850.144 116.672a32 32 0 0 1 45.248 45.28L556.608 500.672l334.08 334.08A32 32 0 0 1 845.44 880L511.36 545.92l-317.44 317.472a32 32 0 1 1-45.248-45.248l317.44-317.44L144 178.56a32 32 0 0 1 0-45.28z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineError32.defaultProps = {
  size: 18,
};

IconlineError32 = React.memo ? React.memo(IconlineError32) : IconlineError32;

export default IconlineError32;

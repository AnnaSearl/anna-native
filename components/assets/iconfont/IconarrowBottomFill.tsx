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

let IconarrowBottomFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M348.832 398.208h325.984a56.896 56.896 0 0 1 43.648 93.376l-163.392 195.584a56.896 56.896 0 0 1-87.36-0.128l-162.624-195.52a56.896 56.896 0 0 1 43.744-93.312z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrowBottomFill.defaultProps = {
  size: 18,
};

IconarrowBottomFill = React.memo ? React.memo(IconarrowBottomFill) : IconarrowBottomFill;

export default IconarrowBottomFill;

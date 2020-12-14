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

let IconlineIncrease40: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128a25.6 25.6 0 0 1 25.6 25.6v332.8h332.8a25.6 25.6 0 0 1 0 51.2H537.5744L537.6 870.4a25.6 25.6 0 0 1-51.2 0l-0.0256-332.8H153.6a25.6 25.6 0 0 1 0-51.2h332.8V153.6a25.6 25.6 0 0 1 25.6-25.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineIncrease40.defaultProps = {
  size: 18,
};

IconlineIncrease40 = React.memo ? React.memo(IconlineIncrease40) : IconlineIncrease40;

export default IconlineIncrease40;

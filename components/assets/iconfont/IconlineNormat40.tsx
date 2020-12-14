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

let IconlineNormat40: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2c254.4896 0 460.8 206.3104 460.8 460.8s-206.3104 460.8-460.8 460.8S51.2 766.4896 51.2 512 257.5104 51.2 512 51.2z m0 51.2C285.7728 102.4 102.4 285.7728 102.4 512s183.3728 409.6 409.6 409.6 409.6-183.3728 409.6-409.6S738.2272 102.4 512 102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineNormat40.defaultProps = {
  size: 18,
};

IconlineNormat40 = React.memo ? React.memo(IconlineNormat40) : IconlineNormat40;

export default IconlineNormat40;

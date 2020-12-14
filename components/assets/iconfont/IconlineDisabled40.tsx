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

let IconlineDisabled40: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 51.2c254.4896 0 460.8 206.3104 460.8 460.8s-206.3104 460.8-460.8 460.8S51.2 766.4896 51.2 512 257.5104 51.2 512 51.2z m307.1488 189.824L241.024 819.1488A408.064 408.064 0 0 0 512 921.6c226.2272 0 409.6-183.3728 409.6-409.6a408.064 408.064 0 0 0-102.4512-270.976zM512 102.4C285.7728 102.4 102.4 285.7728 102.4 512a408.064 408.064 0 0 0 102.4512 270.976L782.976 204.8512A408.064 408.064 0 0 0 512 102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineDisabled40.defaultProps = {
  size: 18,
};

IconlineDisabled40 = React.memo ? React.memo(IconlineDisabled40) : IconlineDisabled40;

export default IconlineDisabled40;

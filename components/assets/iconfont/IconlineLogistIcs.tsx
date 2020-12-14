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

let IconlineLogistIcs: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 800a64 64 0 0 1-64-64v-228.032a64 64 0 0 1 18.464-44.992l90.816-91.936A64 64 0 0 1 218.816 352H384V224a64 64 0 0 1 64-64h448a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64h-160a64 64 0 1 1-128 0h-160a63.68 63.68 0 0 1-32.032-8.576c-9.376 5.44-20.32 8.576-31.968 8.576H288a64 64 0 1 1-128 0H128zM896 224H448v512h448V224z m-512 192H218.816L128 507.968V736h256V416z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlineLogistIcs.defaultProps = {
  size: 18,
};

IconlineLogistIcs = React.memo ? React.memo(IconlineLogistIcs) : IconlineLogistIcs;

export default IconlineLogistIcs;

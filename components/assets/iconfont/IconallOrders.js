/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconallOrders = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 168a24 24 0 0 1 24 24v640a24 24 0 0 1-24 24H224a24 24 0 0 1-24-24V192a24 24 0 0 1 24-24h104v48h-80v592h528v-592h-80v-48z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M672 120H352A24 24 0 0 0 328 144v128a24 24 0 0 0 24 24h320a24 24 0 0 0 24-24V144A24 24 0 0 0 672 120z m-24 48v80h-272v-80h272z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
      <Path
        d="M368 656h192v64H368zM368 512h288v64H368zM368 368h288v64H368z"
        fill={getIconColor(color, 2, '#1B2844')}
      />
    </Svg>
  );
};

IconallOrders.defaultProps = {
  size: 18,
};

IconallOrders = React.memo ? React.memo(IconallOrders) : IconallOrders;

export default IconallOrders;

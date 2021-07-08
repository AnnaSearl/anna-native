/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconContactCustomerService = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c233.173333 0 422.677333 187.072 426.602667 419.328L938.666667 512v213.333333h-85.333334V512c0-188.522667-152.810667-341.333333-341.333333-341.333333-186.261333 0-337.706667 149.205333-341.269333 334.613333L170.666667 512v213.333333H85.333333V512C85.333333 276.352 276.352 85.333333 512 85.333333z"
        fill={getIconColor(color, 0, '#1B2844')}
      />
      <Path
        d="M234.666667 554.666667h64a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-64a21.333333 21.333333 0 0 1-21.333334-21.333333V576a21.333333 21.333333 0 0 1 21.333334-21.333333zM789.333333 554.666667h-64a85.333333 85.333333 0 0 0-85.333333 85.333333v170.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h64a21.333333 21.333333 0 0 0 21.333334-21.333333V576a21.333333 21.333333 0 0 0-21.333334-21.333333z"
        fill={getIconColor(color, 1, '#1B2844')}
      />
    </Svg>
  );
};

IconContactCustomerService.defaultProps = {
  size: 18,
};

IconContactCustomerService = React.memo ? React.memo(IconContactCustomerService) : IconContactCustomerService;

export default IconContactCustomerService;
